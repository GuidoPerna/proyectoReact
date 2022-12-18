import React from "react";
import Item from "./Item";

const ItemList = ({data = []}) => {
    return (
        data.map((item) => <Item key={item?.id} product={item}/> )
    );
}

export default ItemList;