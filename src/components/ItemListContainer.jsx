import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { inventario } from "../mocks/item.mocks";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(inventario);
            }, 2000);
        });
        getData.then(res => {
            if (category) {
                const categories = res.filter(product => product.category === category )
                setData(categories);
            } else {
                setData(res);
            }
        })
        .catch((error) => console.log("Hubo un problema"));
    }, [category])

    const onAdd = (cantidad) => {
        console.log(`${cantidad} en el carrito`);
    }

    if (data.length === 0) {
        return <p>Cargando inventario...</p>;
    }

    return (
        <>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;