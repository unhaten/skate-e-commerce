import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { SkateboardModel } from "../models/SkateboardModel";

const Skateboard = ({ zoomed, setZoomed }) => {
    return (
        <>
            <Canvas
                camera={{ position: [0, 10, 0], fov: 20 }}
                style={{
                    backgroundColor: "#111a21",
                    width: "100%",
                    height: "450px",
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                {/* <Suspense fallback={null}> */}
                <SkateboardModel
                    position={[0, 0, 0]}
                    zoomed={zoomed}
                    setZoomed={setZoomed}
                />
                {/* </Suspense> */}
                {/* orbit controls lets rotate object */}
                {/* <OrbitControls /> */}
            </Canvas>
        </>
    );
};

export default Skateboard;
