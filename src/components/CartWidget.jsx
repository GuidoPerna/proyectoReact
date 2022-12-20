import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded?.length;

    return (
            <i className="bi bi-cart" ><button>{count > 0 &&( <span>   {count}    </span>    )}</button></i>
        );
};

export default CartWidget;