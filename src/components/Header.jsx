import { useState } from "react";

import Nav from "./Nav";
import Cart from "./Cart";

const Header = () => {
    // ! FIXME: how to make cart properly?

    const [isCartActive, setIsCartActive] = useState(false);

    const handleCart = () => {
        setIsCartActive(true);
    };

    const handleClose = () => {
        setIsCartActive(false);
    };
    return (
        <header className="header">
            {isCartActive ? (
                <Cart isCartActive={isCartActive} handleClose={handleClose} />
            ) : null}
            <Nav isCartActive={isCartActive} handleCart={handleCart}></Nav>
        </header>
    );
};

export default Header;
