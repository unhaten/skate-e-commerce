const Presets = ({ setSelectedSkate, selectedSkate, handleSelect }) => {
    return (
        <>
            <div className="skates__presets">
                <h3 className="presets__header">
                    Here some ready to go skateboards:
                </h3>
                <ul className="presets__list">
                    <li className="presets__card" onClick={handleSelect}>
                        skate1
                    </li>
                    <li className="presets__card" onClick={handleSelect}>
                        skate2
                    </li>
                    <li className="presets__card" onClick={handleSelect}>
                        skate3
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Presets;
