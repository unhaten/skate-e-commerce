import { Link } from "react-router-dom";
import logo from "../assets/main-logo.png";
import Burger from "./Burger";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <img src={logo} alt="logo" className="nav__logo" />
            </Link>
            <ul className="nav__links">
                <li className="nav__item">Skates</li>
                <li className="nav__item">About</li>
                <li className="nav__item">Contact</li>
                <li className="nav__item">Help</li>
            </ul>
            <div className="cart">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 40"
                    x="0px"
                    y="0px"
                    width="40px"
                >
                    <title>Artboard 113</title>
                    <g data-name="Layer 2">
                        <path d="M27,26a3,3,0,1,0-3,3A3,3,0,0,0,27,26Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,23,26Z" />
                        <path d="M15,26a3,3,0,1,0-3,3A3,3,0,0,0,15,26Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,11,26Z" />
                        <path d="M2,6H5.17L8,21.18A1,1,0,0,0,9,22H27a1,1,0,0,0,1-.79l3-14A1,1,0,0,0,30,6H9A1,1,0,0,0,8,7.21L10.76,20H9.83L7,4.82A1,1,0,0,0,6,4H2A1,1,0,0,0,2,6Zm8.24,2H28.76L26.19,20H12.81Z" />
                    </g>
                </svg>
            </div>
            <Burger></Burger>
        </nav>
    );
};

export default Nav;
