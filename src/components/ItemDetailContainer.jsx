import React from "react";
import { useGetItem } from "../hooks/usegetItem";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const item = useGetItem();

    if (!item) {
        return <p>Cargando inventario...</p>;
    }
    
    return (
    <ItemDetail item={item}/>
    );
}

export default ItemDetailContainer;
