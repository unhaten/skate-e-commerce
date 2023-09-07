import { useFrame } from "@react-three/fiber";
import { useState } from "react";

import { useGLTF } from "@react-three/drei";

export function SkateboardModel(props) {
    const { nodes, materials } = useGLTF(
        `/${props.filename ? props.filename : "vans"}.glb`
    );

    useFrame(({ camera }) => {
        if (props.isRotating) {
            props.setRotationX((prevRotationX) => {
                const newRotationX =
                    prevRotationX +
                    Math.sign(props.targetRotation - prevRotationX) *
                        props.rotationSpeed;

                if (
                    (props.targetRotation === Math.PI &&
                        newRotationX >= props.targetRotation) ||
                    (props.targetRotation === 0 &&
                        newRotationX <= props.targetRotation)
                ) {
                    props.setIsRotating(false);
                    return props.targetRotation;
                }

                return newRotationX;
            });
        }

        // Zoom the camera to the wheels when zoomed state is true
        if (props.zoomed) {
            camera.position.set(0, 2.5, 0); // Adjust the position based on your preference
            camera.lookAt(0, 0.6, 0.65); // Point the camera towards the skateboard
        } else {
            camera.position.set(0, 10, 0); // Default camera position when not zoomed
            camera.lookAt(0, 0, 0); // Point the camera towards the skateboard
        }
    });

    return (
        <group {...props} dispose={null} rotation={[props.rotationX, 0, 0]}>
            {/* board */}
            <group scale={[0.4, 1, 1.334]}>
                <mesh
                    geometry={nodes.Plane004.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    geometry={nodes.Plane004_1.geometry}
                    material={materials["Material.003"]}
                />
            </group>
            <mesh
                geometry={nodes.Cube001.geometry}
                material={materials["Material.001"]}
                position={[0.002, -0.033, 0.811]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.092, 0.008, 0.119]}
            />
            {/* transmission */}
            <mesh
                geometry={nodes.Cylinder003.geometry}
                material={materials["Material.001"]}
                position={[0.002, -0.097, 0.818]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.081, 0.059, 0.081]}
            />
            {/* wheel */}
            <mesh
                geometry={nodes.Cylinder004.geometry}
                material={nodes.Cylinder004.material}
                position={[-0.336, -0.119, 0.851]}
                rotation={[Math.PI, 0, Math.PI / 2]}
                scale={[0.079, 0.048, 0.079]}
            />
            {/* wheel */}
            <mesh
                geometry={nodes.Cylinder005.geometry}
                material={nodes.Cylinder005.material}
                position={[0.336, -0.119, 0.851]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.079, 0.048, 0.079]}
            />
            <mesh
                geometry={nodes.Cube002.geometry}
                material={materials["Material.001"]}
                position={[0, -0.033, -0.71]}
                scale={[0.092, 0.008, 0.119]}
            />
            {/* transmission */}
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials["Material.001"]}
                position={[0, -0.097, -0.716]}
                rotation={[0, 0, Math.PI]}
                scale={[0.081, 0.059, 0.081]}
            />
            {/* wheel */}
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={nodes.Cylinder002.material}
                position={[0.338, -0.119, -0.749]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.079, 0.048, 0.079]}
            />
            {/* wheel */}
            <mesh
                geometry={nodes.Cylinder006.geometry}
                material={nodes.Cylinder006.material}
                position={[-0.333, -0.119, -0.749]}
                rotation={[Math.PI, 0, Math.PI / 2]}
                scale={[0.079, 0.048, 0.079]}
            />
        </group>
    );
}

// useGLTF.preload("/vans.glb");
