import React from "react";
import Item from "./Item";

const ItemList = ({data = []}) => {
    return (
        data.map((items) => <Item key={items.id} info={items}/> )
    );
}

export default ItemList;