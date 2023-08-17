import { useState } from "react";
import Box from "../../shaders/Box";
import Skateboard from "../../shaders/Skateboard";
import Introduction from "./Introduction";
import Gifs from "./Gifs";
import Reviews from "./Reviews";
import WaitingFor from "./WaitingFor";
import LoadingScreen from "../../components/LoadingScreen";

const Home = () => {
    // const [zoomed, setZoomed] = useState(false);

    // const handleZoom = () => {
    //     setZoomed((prev) => !prev);
    // };

    return (
        <section className="section__home">
            <div className="home__header">
                <h1>Styleride Skate Co.</h1>
                <h2>Step Up Your Game, Step into Style</h2>
                {/* <Skateboard zoomed={zoomed} setZoomed={setZoomed}></Skateboard> */}
                {/* <button onClick={handleZoom}>click to zoom</button> */}
                {/* <Box></Box> */}
                <Introduction></Introduction>
                <Gifs></Gifs>
                <Reviews></Reviews>
                <WaitingFor></WaitingFor>
            </div>
        </section>
    );
};

export default Home;
