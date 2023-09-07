import { useState, useEffect } from "react";

const Create = () => {
    const [progress, setProgress] = useState(1);

    const handleProgress = () => {
        progress < 3 ? setProgress((prev) => prev + 1) : null;
    };

    return (
        <>
            <div className="skates__create">
                <h3 className="create__progress">Step {progress}</h3>

                {progress === 1 ? (
                    <p className="create__text">Select board</p>
                ) : progress === 2 ? (
                    <p className="create__text">Select wheels</p>
                ) : progress === 3 ? (
                    <p className="create__text">Select transmission</p>
                ) : null}

                <button className="create__button" onClick={handleProgress}>
                    Next
                </button>
            </div>
        </>
    );
};

export default Create;
