﻿import React, { Suspense, useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";

export function Scene(props) {
    const group = useRef();
    const mesh = useRef();
    const { nodes, materials, animations } = useGLTF("/source/model.glb");
    const { actions } = useAnimations(animations, group);
    const upAndDown = new TWEEN.Tween({ y: -2.8, rot: 0 })
        .to({ y: -3, rot: 1 }, 3000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .repeat(Infinity)
        .yoyo(true);


    useEffect(() => {
        actions["Take 01"].timeScale = "3";
        actions["Take 01"].play();
        requestAnimationFrame(animate);
        upAndDown.start();
        if (window.innerWidth > 768) {
            document.addEventListener("mousemove", moveModel);
        }
        upAndDown.onUpdate(({ y, rot }, elapsed) => {
            mesh.current.position.y = y;
            if (window.innerWidth < 768) {
                mesh.current.rotation.y = -0.5 + rot;
            }
        });
        return () => {
            upAndDown.stop()
            document.removeEventListener("mousemove", moveModel);
        }
    }, []);

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    const moveModel = (e) => {
        mesh.current.rotation.y = -0.5 + e.clientX / window.innerWidth;
    };



    return (
        <group
            ref={mesh}
            rotation={[0, 0.3, 0]}
            position={[0, -3, 0]}
            {...props}
            dispose={null}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-0.27, 0.12, 1.33]}>
                    <mesh
                        geometry={nodes.mentor_roman_retopo_0.geometry}
                        material={materials.Stone}
                    />
                </group>
                <group
                    ref={group}
                    position={[0.16, -0.1, 4.81]}
                    rotation={[-0.1, 0.1, 0]}
                    scale={[1, 1, 1.8]}
                >
                    <mesh
                        geometry={nodes.nimbus002_0.geometry}
                        material={nodes.nimbus002_0.material}
                    />
                    <group name="nimbus001">
                        <mesh
                            geometry={nodes.nimbus001_0.geometry}
                            material={nodes.nimbus001_0.material}
                        />
                    </group>
                    <mesh
                        geometry={nodes.nimbus003_0.geometry}
                        material={nodes.nimbus003_0.material}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/source/model.glb");

export default function RhetoricianModel() {
    return (
        <Canvas
            style={{
                height: '600px',
            }}
        >
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}
