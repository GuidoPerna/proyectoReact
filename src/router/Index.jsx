import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../views/Cart";
import Category from "../views/Category";
import Checkout from "../views/checkout";
import Item from "../views/Item";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/category/:category',
        element: <Category/>,
    },
    {
        path: '/item/:id',
        element: <Item/>,
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
]);