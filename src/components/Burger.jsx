import { NavLink } from "react-router-dom";

const Burger = ({ isBurgerActive, setIsBurgerActive }) => {
    const handleOpen = () => {
        setIsBurgerActive((prev) => !prev);
    };

    return (
        <>
            <label className="burger__container">
                <input type="checkbox" onClick={handleOpen} />
                <svg className="burger" viewBox="0 0 32 32">
                    <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <ul
                className={
                    isBurgerActive
                        ? "burger__links burger_active"
                        : "burger__links"
                }
            >
                <NavLink className="burger__item">Skates</NavLink>
                <NavLink to="about" className="burger__item">
                    About
                </NavLink>
                <NavLink className="burger__item">Contact</NavLink>
                <NavLink className="burger__item">Help</NavLink>
            </ul>
        </>
    );
};

export default Burger;
