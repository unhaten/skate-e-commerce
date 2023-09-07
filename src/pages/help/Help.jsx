import { useState } from "react";
import "./../../styles/help.css";
import HelpBlock from "./help-block/HelpBlock";
import data from "./help-block/blockData";

const Help = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (id) => {
        setActiveTab(id);
    };

    const tabs = data.map((item) => (
        <HelpBlock
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            activeTab={activeTab}
            handleClick={handleClick}
        ></HelpBlock>
    ));

    return (
        <>
            <section className="section__help">
                <h2 className="section__header help__header">
                    Here are some most asked questions that might help you:
                </h2>
                <ul className="help__list">{tabs}</ul>
            </section>
        </>
    );
};

export default Help;
