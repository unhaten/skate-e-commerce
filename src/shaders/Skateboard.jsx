import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { SkateboardModel } from "../models/SkateboardModel";

const Skateboard = ({
    zoomed,
    setZoomed,
    rotationSpeed,
    isRotating,
    setIsRotating,
    rotationX,
    setRotationX,
    targetRotation,
    setTargetRotation,
    handleRotate,
    filename,
}) => {
    return (
        <>
            <Canvas
                className="skateboard-model"
                camera={{ position: [0, 10, 0], fov: 20 }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                {/* <Suspense fallback={null}> */}
                <SkateboardModel
                    position={[0, 0, 0]}
                    zoomed={zoomed}
                    setZoomed={setZoomed}
                    rotationSpeed={rotationSpeed}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    rotationX={rotationX}
                    setRotationX={setRotationX}
                    targetRotation={targetRotation}
                    setTargetRotation={setTargetRotation}
                    handleRotate={handleRotate}
                    filename={filename}
                />
                {/* </Suspense> */}
                {/* orbit controls lets rotate object */}
                {/* <OrbitControls /> */}
            </Canvas>
        </>
    );
};

export default Skateboard;
