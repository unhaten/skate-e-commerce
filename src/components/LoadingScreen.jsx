import { useState, useEffect } from "react";
import loadingPhoto from "../assets/main-logo.png";

const LoadingScreen = ({ opacity }) => {
    const [lowTimeLeft, setLowTimeLeft] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLowTimeLeft(true);
        }, 2500);
    }, []);

    return (
        <>
            <div
                className="loading__container"
                style={
                    !lowTimeLeft ? { opacity: `${opacity}` } : { opacity: `0` }
                }
            >
                <div className="loading__content">
                    <img
                        src={loadingPhoto}
                        alt="loadingScreen"
                        className="loading__image"
                    />
                    <span className="loader"></span>
                </div>
            </div>
        </>
    );
};

export default LoadingScreen;
