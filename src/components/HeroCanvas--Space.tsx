// src/components/HeroCanvas.tsx
"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Définir des couleurs hex (basées sur vos variables CSS pour l'harmonie)
// --color-primary: #6366f1 (Indigo)
const PRIMARY_COLOR = 0x6366f1;
// --color-secondary: #22d3ee (Cyan)
const SECONDARY_COLOR = 0x22d3ee;

// 1. Le composant principal qui gère la scène Three.js
function Scene() {
    const meshRef = useRef<THREE.Group>(null!);

    // Créer un champ de particules légères (2000 points)
    const count = 2000;
    const separation = 5;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Distribuer les points aléatoirement dans une zone
            const x = (Math.random() - 0.5) * separation * 10;
            const y = (Math.random() - 0.5) * separation * 5;
            const z = (Math.random() - 0.5) * separation * 10;
            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, []);

    // Animer subtilement la scène
    useFrame(() => {
        // Rotation lente du groupe
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0005;
            meshRef.current.rotation.x += 0.0001;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Lumière ambiante douce */}
            <ambientLight intensity={0.5} />

            {/* Lumière ponctuelle pour faire ressortir les wireframes */}
            <pointLight position={[10, 10, 10]} intensity={1} color={PRIMARY_COLOR} />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color={SECONDARY_COLOR} />

            {/* Particules (plus claires et plus petites pour l'effet) */}
            <points>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    attach="material"
                    size={0.01} // Encore plus petit
                    sizeAttenuation={true}
                    color={new THREE.Color(0.8, 0.8, 1)} // Couleur très claire
                />
            </points>

            {/* Ajout d'une forme flottante - Primaire */}
            <Float floatIntensity={2} speed={1.5}>
                <mesh position={[0, 0, -2]}>
                    <dodecahedronGeometry args={[0.5, 0]} />
                    {/* Utilisation de Phong pour les reflets */}
                    <meshPhongMaterial color={PRIMARY_COLOR} wireframe opacity={0.4} transparent />
                </mesh>
            </Float>

            {/* Ajout d'une deuxième forme flottante - Secondaire */}
            <Float floatIntensity={1} speed={0.8} rotationIntensity={0.5}>
                <mesh position={[2, 1, -3]}>
                    <icosahedronGeometry args={[0.3, 0]} />
                    <meshPhongMaterial color={SECONDARY_COLOR} wireframe opacity={0.4} transparent />
                </mesh>
            </Float>

            {/* Stars (effet ciel étoilé) pour la profondeur */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        </group>
    );
}

// 2. Le composant Canvas qui contient la scène
export default function HeroCanvas() {
    return (
        // Utiliser min-h-screen pour prendre toute la hauteur, et s'assurer que c'est bien l'arrière-plan
        <div className="absolute inset-0 z-0 min-h-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
                {/* On garde OrbitControls pour le débug, mais on peut le supprimer pour la production si ce n'est qu'un fond */}
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </div>
    );
}