import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../views/Category";
import Item from "../views/Item";
import Cart from "../views/Cart";

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
]);