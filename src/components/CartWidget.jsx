import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <Link to="/cart">
            <i className="bi bi-cart" ><button>{count > 0 &&( <span>   {count}    </span>    )}</button></i>
        </Link>
        );
};

export default CartWidget;