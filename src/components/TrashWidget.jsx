import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';

export const TrashWidget = ({ itemId }) => {
    const { removeItem } = useContext(CartContext);
    return(
        <Button onClick={() => removeItem(itemId)} variant="primary">Eliminar producto</Button>
    );
}