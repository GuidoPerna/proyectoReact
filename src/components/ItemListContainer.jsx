import React, {useState, useEffect} from "react";
import Title from "./Title";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { inventario } from "../mocks/item.mocks";

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(inventario);
            }, 2000);
        });
        getData.then(res => setData(res))
        .catch((error) => console.log("Hubo un problema"));
    }, [])

    const onAdd = (cantidad) => {
        console.log(`${cantidad} en el carrito`);
    }

    return (
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;