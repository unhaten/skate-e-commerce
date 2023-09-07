import { useRef, useState } from "react";
import Skateboard from "../../../../shaders/Skateboard";

const SkatePopup = ({
    selectedSkate,
    handleClose,
    handleZoom,
    setZoomed,
    zoomed,
    rotationSpeed,
    isRotating,
    setIsRotating,
    rotationX,
    setRotationX,
    targetRotation,
    setTargetRotation,
    handleRotate,
}) => {
    const popup = useRef(null);

    const handlePopupClose = (e) => {
        if (
            popup.current &&
            selectedSkate &&
            !popup.current.contains(e.target)
        ) {
            handleClose();
        }
    };

    document.addEventListener("mousedown", handlePopupClose);

    return (
        <>
            <div className="page-mask"></div>
            <div
                ref={popup}
                className={`skates__popup ${
                    selectedSkate ? "activePopup" : null
                }`}
            >
                <button className="popup__button_close" onClick={handleClose}>
                    Close
                </button>
                <div className="popup__content">
                    <Skateboard
                        zoomed={zoomed}
                        setZoomed={setZoomed}
                        handleZoom={handleZoom}
                        rotationSpeed={rotationSpeed}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        rotationX={rotationX}
                        setRotationX={setRotationX}
                        targetRotation={targetRotation}
                        setTargetRotation={setTargetRotation}
                        handleRotate={handleRotate}
                        filename={selectedSkate.filename}
                    ></Skateboard>
                    <button onClick={handleZoom}>click to zoom</button>
                    <button onClick={handleRotate}>click to rotate</button>

                    {/* <img src="" alt="skate-img" className="popup__image" /> */}
                    <h3 className="popup__name">{selectedSkate.name}</h3>
                    <p className="popup__price">
                        Price: {selectedSkate.price}$
                    </p>
                    <p className="popup__description">
                        {selectedSkate.description}
                    </p>
                    <div className="popup__button-container">
                        <button className="popup__button">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkatePopup;
