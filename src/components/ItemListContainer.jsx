import React from "react";
import { ItemList } from "./ItemList";
import { useGetItem } from "../hooks/usegetItem";

export const ItemListContainer = () => {
    const items = useGetItem();

    if (!items === 0) {
        return <p>Cargando inventario...</p>;
    }

    return (
        <>
            <ItemList products={items}/>
        </>
    );
}

export default ItemListContainer;