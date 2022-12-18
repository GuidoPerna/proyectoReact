import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { inventario } from "../mocks/item.mocks";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() =>{
        new Promise((resolve) => 
            setTimeout(() =>{
                const itemFiltered = inventario.find((item) => item.id === id);
                resolve(itemFiltered);
            }, 2000)
            ).then((data) => setItem(data));
    }, [id]); 

    if (!item) {
        return <p>Cargando inventario...</p>;
    }
    
    return (
    <ItemDetail item={item}/>
    );
}

export default ItemDetailContainer;
