import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { inventario } from "../mocks/item.mocks";

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(inventario[0]);
            }, 7000);
        });
        getData.then(res => setData(res));
    }, []); 

    if (!data) {
        return <p>Cargando inventario...</p>;
    }
    
    return  <ItemDetail data={data}/>;
}

export default ItemDetailContainer;