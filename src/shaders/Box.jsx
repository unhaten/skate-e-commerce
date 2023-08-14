import { Canvas } from "@react-three/fiber";
import { BoxModel } from "../models/BoxModel";

const Box = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <BoxModel position={[-1.2, 0, 0]} />
            <BoxModel position={[1.2, 0, 0]} />
        </Canvas>
    );
};

export default Box;
