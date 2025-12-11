// src/components/HeroCanvas.tsx
"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const PRIMARY_COLOR = 0x6366f1;
const SECONDARY_COLOR = 0x22d3ee;

export function NeuralNet() {
    const groupRef = useRef<THREE.Group>(null!);

    // --- Génération des nœuds ---
    const nodeCount = 40;
    const nodes = useMemo(() => {
        return Array.from({ length: nodeCount }, () => [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 6,
        ]);
    }, []);

    // --- Connexions entre les nœuds ---
    const connections = useMemo(() => {
        const pts: THREE.Vector3[] = [];
        nodes.forEach((a, i) => {
            nodes.forEach((b, j) => {
                if (i < j && Math.random() > 0.7) {
                    pts.push(new THREE.Vector3(...a));
                    pts.push(new THREE.Vector3(...b));
                }
            });
        });
        return pts;
    }, [nodes]);

    // --- Pulsation couleur des nœuds ---
    const colorPulse = useRef(0);
    useFrame(() => {
        colorPulse.current += 0.01;
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0007;
            groupRef.current.rotation.x += 0.0002;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color={PRIMARY_COLOR} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color={SECONDARY_COLOR} />

            {/* --- Nœuds --- */}
            {nodes.map((pos, i) => {
                const lerp = (Math.sin(colorPulse.current + i) + 1) / 2; // 0 → 1
                const color = new THREE.Color(PRIMARY_COLOR).lerp(
                    new THREE.Color(SECONDARY_COLOR),
                    lerp
                );

                return (
                    <mesh key={i} position={new THREE.Vector3(...pos)}>
                        <sphereGeometry args={[0.07, 12, 12]} />
                        <meshBasicMaterial color={color} />
                    </mesh>
                );
            })}

            {/* --- Lignes de connexions --- */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[new Float32Array(connections.flatMap(v => v.toArray())), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="white" transparent opacity={0.15} />
            </lineSegments>



            <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </group>
    );
}

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 z-0 min-h-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                    <NeuralNet />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
