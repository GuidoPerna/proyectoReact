import React from "react";
import Item from "./Item";

const ItemList = ({data = []}) => {
    return (
        data.map(inventario => <Item key={inventario.id} info={inventario}/> )
    );
}

export default ItemList;