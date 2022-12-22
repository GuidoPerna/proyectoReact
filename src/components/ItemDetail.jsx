import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/cartContext";


export const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><h2>{item?.name}</h2></Card.Title>
        <Card.Text>{item?.description}</Card.Text>
        <Card.Text>Stock: {item?.stock}</Card.Text>
        <Card.Text>{currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (<span>Sin stock</span>)}</Card.Text>
        <Button variant="primary" onClick={handleAdd} disabled={currentStock === 0}>Agregar al carrito</Button>
        <Button variant="primary" disabled={!isInCart(item.id)} onClick={handleCheckout}>Ir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;