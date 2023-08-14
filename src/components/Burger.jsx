import { useState } from "react";
import { NavLink } from "react-router-dom";

const Burger = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const handleOpen = () => {
        setIsBurgerActive((prev) => !prev);
    };

    return (
        <>
            <div
                className={isBurgerActive ? "burger burger_active" : "burger"}
                onClick={handleOpen}
            >
                burger
                {isBurgerActive && (
                    <ul className="burger__links">
                        <NavLink className="burger__item">Skates</NavLink>
                        <NavLink to="about" className="burger__item">
                            About
                        </NavLink>
                        <NavLink className="burger__item">Contact</NavLink>
                        <NavLink className="burger__item">Help</NavLink>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Burger;
