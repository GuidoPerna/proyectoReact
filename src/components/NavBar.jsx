import React from "react";
import CartWidget from "./CartWidget";

export const NavBar = () => {
    return (
    <div>
        <ul className="navList">
            <li>
            <a className="navLink" href="#">Home</a>
            </li>
            <li>
            <a className="navLink" href="#">Productos</a>
            </li>
            <li>
            <a className="navLink" href="#">Contacto</a>
            </li>
            <li>
            <a className="navLink" href="#">
                <CartWidget/>
            </a>
            </li>
        </ul>
    </div>
    )
}

export default NavBar;
