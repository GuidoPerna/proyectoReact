import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { inventario } from "../mocks/item.mocks";

const prod = {id: "1", name: "teclado 1", categoria: "teclados", descripcion: "descripcion teclado 1", stock: "10", precio: "800", };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(inventario[0]);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, []);

    return(
    <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;