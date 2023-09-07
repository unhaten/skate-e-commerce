const HelpBlock = ({ id, question, answer, activeTab, handleClick }) => {
    return (
        <>
            <li className="help__item">
                <div
                    className={`help__block ${
                        id !== activeTab ? "answer_hidden" : "answer_visible"
                    }`}
                >
                    <p
                        className="help__question"
                        onClick={() => handleClick(id)}
                    >
                        {question}
                    </p>
                    <span className="help__answer">{answer}</span>
                </div>
            </li>
        </>
    );
};

export default HelpBlock;
