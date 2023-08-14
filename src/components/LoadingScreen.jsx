import loadingPhoto from "../assets/loadingscreen.png";

const LoadingScreen = () => {
    return (
        <>
            <div className="loading__container">
                <img
                    src={loadingPhoto}
                    alt="loadingScreen"
                    className="loading__image"
                />
                <span className="loader"></span>
            </div>
        </>
    );
};

export default LoadingScreen;
