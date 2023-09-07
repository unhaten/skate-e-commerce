import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/main-logo.png";
import Burger from "./Burger";

const Nav = ({ handleCart }) => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    return (
        <>
            <nav className="nav">
                <Link to="/">
                    <img src={logo} alt="logo" className="nav__logo" />
                </Link>
                <ul className="nav__links">
                    <NavLink className="nav__item" to="skates">
                        Skates
                    </NavLink>
                    <NavLink className="nav__item" to="help">
                        Help
                    </NavLink>
                </ul>
                <div className="nav__menu-holder">
                    <div className="cart-icon" onClick={handleCart}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 40"
                            x="0px"
                            y="0px"
                        >
                            <g data-name="Layer 2">
                                <path d="M27,26a3,3,0,1,0-3,3A3,3,0,0,0,27,26Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,23,26Z" />
                                <path d="M15,26a3,3,0,1,0-3,3A3,3,0,0,0,15,26Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,11,26Z" />
                                <path d="M2,6H5.17L8,21.18A1,1,0,0,0,9,22H27a1,1,0,0,0,1-.79l3-14A1,1,0,0,0,30,6H9A1,1,0,0,0,8,7.21L10.76,20H9.83L7,4.82A1,1,0,0,0,6,4H2A1,1,0,0,0,2,6Zm8.24,2H28.76L26.19,20H12.81Z" />
                            </g>
                        </svg>
                    </div>
                    <Burger
                        isBurgerActive={isBurgerActive}
                        setIsBurgerActive={setIsBurgerActive}
                    ></Burger>
                </div>
            </nav>
        </>
    );
};

export default Nav;
