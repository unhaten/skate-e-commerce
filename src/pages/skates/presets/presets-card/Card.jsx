const Card = ({ id, name, handleSelect, price, description, filename }) => {
    return (
        <>
            <li
                className="presets__card"
                onClick={() =>
                    handleSelect(id, name, price, description, filename)
                }
            >
                <img
                    src="/skateboard-img.png"
                    alt="skate-image"
                    className="card__image"
                />
                <div className="card__content">
                    <p className="card__name">{name}</p>
                    <p className="card__price">{price}$</p>
                </div>
            </li>
        </>
    );
};

export default Card;
