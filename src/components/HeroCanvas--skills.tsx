// src/components/DependencyTree.tsx
"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Stars, OrbitControls, Image as DreiImage } from "@react-three/drei";
import * as THREE from "three";

// --- Couleurs principales ---
const PRIMARY_COLOR = 0x6366f1;
const SECONDARY_COLOR = 0x22d3ee;

export function DependencyTree() {
    const groupRef = useRef<THREE.Group>(null!);

    // --- Nœuds technos (logos) ---
    const nodes: { name: string; position: [number, number, number]; img: string }[] = [
        { name: "React", position: [0, 1.8, 0] as [number, number, number], img: "/data/images/React_native.png" },
        { name: "Next.js", position: [-1.2, 0.8, 0] as [number, number, number], img: "/data/images/NextJS.png" },
        { name: "Python", position: [1.3, 0.7, 0] as [number, number, number], img: "/data/images/Python.png" },
        { name: "JavaScript", position: [-1.4, -0.8, 0] as [number, number, number], img: "/data/images/JavaScript.png" },
        { name: "HTML", position: [0.2, -1.8, 0] as [number, number, number], img: "/data/images/HTML.png" },
        { name: "CSS", position: [1.4, -0.8, 0] as [number, number, number], img: "/data/images/CSS.png" },
    ];


    // --- Branches = lignes entre parent → enfant ---
    const connections = useMemo(() => {
        const lines: THREE.Vector3[] = [];

        const root = new THREE.Vector3(0, 0, 0);

        nodes.forEach((node) => {
            const p = new THREE.Vector3(...node.position);
            lines.push(root.clone(), p.clone());
        });

        return lines.flatMap(v => v.toArray());
    }, []);

    // --- Rotation lente ---
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0025;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color={PRIMARY_COLOR} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color={SECONDARY_COLOR} />

            {/* --- Connecteurs (branches) --- */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[new Float32Array(connections), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="white" transparent opacity={0.2} />
            </lineSegments>

            {/* --- Nœud central --- */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#6366f1" emissive="#4f46e5" emissiveIntensity={0.6} />
            </mesh>

            {/* --- Logos technos --- */}
            {nodes.map((node, i) => (
                <group key={i} position={node.position} scale={[0.4, 0.4, 0.4]} >
                    <mesh>
                        <sphereGeometry args={[0.16, 16, 16]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <DreiImage
                        url={node.img}
                        // scale={[0.4, 0.4, 0.4]}
                        position={[0, 0, 0.18]} // placé légèrement devant la sphère
                        transparent
                    />
                </group>
            ))
            }

            <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </group >
    );
}

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 z-0 min-h-screen">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <Suspense fallback={null}>
                    <DependencyTree />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
