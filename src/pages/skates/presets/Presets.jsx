import Card from "./presets-card/Card";
import { register } from "swiper/element/bundle";

register();

import data from "../skatesData";

const Presets = ({ setSelectedSkate, selectedSkate, handleSelect }) => {
    const skateData = data.map((skate) => (
        <swiper-slide key={skate.id}>
            <Card
                key={skate.id}
                id={skate.id}
                name={skate.name}
                price={skate.price}
                description={skate.description}
                handleSelect={handleSelect}
                filename={skate.filename}
            />
        </swiper-slide>
    ));

    return (
        <>
            <div className="skates__presets">
                <h3 className="presets__header">
                    Here some ready to go skateboards:
                </h3>

                <div className="presets__slider">
                    <swiper-container
                        className="presets__list"
                        navigation="true"
                    >
                        {skateData}
                    </swiper-container>
                </div>
            </div>
        </>
    );
};

export default Presets;
