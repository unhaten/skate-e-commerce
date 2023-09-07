import { useRef } from "react";

const Cart = ({ isCartActive, handleClose }) => {
    const cart = useRef(null);

    const handleCartClose = (e) => {
        if (cart.current && isCartActive && !cart.current.contains(e.target)) {
            handleClose();
        }
    };

    document.addEventListener("mousedown", handleCartClose);
    return (
        <>
            <div className="page-mask"></div>

            <div className="cart" ref={cart}>
                <button className="cart__button" onClick={handleClose}>
                    Close
                </button>
                <h2 className="cart__header">Your cart</h2>
            </div>
        </>
    );
};

export default Cart;
