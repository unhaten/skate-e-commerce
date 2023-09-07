import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./../../styles/skates.css";
import Presets from "./presets/Presets";
import SkatePopup from "./presets/presets-popup/SkatePopup";

const Skates = () => {
    const [zoomed, setZoomed] = useState(false);
    const [selectedSkate, setSelectedSkate] = useState(null);

    const [isRotating, setIsRotating] = useState(false);
    const [rotationX, setRotationX] = useState(0);
    const [targetRotation, setTargetRotation] = useState(0);

    const handleSelect = (id, name, price, description, filename) => {
        setSelectedSkate({ id, name, price, description, filename });
    };

    const handleClose = () => {
        setSelectedSkate(null);
    };

    const handleZoom = () => {
        setZoomed((prev) => !prev);
    };

    const handleRotate = () => {
        if (!isRotating) {
            setIsRotating(true);
            setTargetRotation(rotationX === 0 ? Math.PI : 0);
        }
    };

    const rotationSpeed = Math.PI / (60 * 0.5);

    return (
        <>
            <section className="section__skates">
                <h2 className="skates__header section__header">
                    Pick the best one for your needs!
                </h2>
                <Presets
                    handleSelect={handleSelect}
                    selectedSkate={selectedSkate}
                    setSelectedSkate={setSelectedSkate}
                ></Presets>
                {/* <p className="skates__text">
                    Or you can create your own skateboard from different
                    details:
                </p>
                <Link className="skates__button" to="create">
                    Go for it!
                </Link> */}
                {selectedSkate ? (
                    <SkatePopup
                        handleClose={handleClose}
                        selectedSkate={selectedSkate}
                        handleZoom={handleZoom}
                        setZoomed={setZoomed}
                        zoomed={zoomed}
                        rotationSpeed={rotationSpeed}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        rotationX={rotationX}
                        setRotationX={setRotationX}
                        targetRotation={targetRotation}
                        setTargetRotation={setTargetRotation}
                        handleRotate={handleRotate}
                    />
                ) : null}
            </section>
            {/* {selectedSkate ? (
                <div className="skates__selected">
                    You have selected: {selectedSkate}
                </div>
            ) : null} */}
        </>
    );
};

export default Skates;
