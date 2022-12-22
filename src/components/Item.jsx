import React from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const Item = ({product, quantityAdded }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product?.id}`);
  };

  return (
    <Card style={{ width: '18rem' }} onClick={handleNavigate}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product?.name}</Card.Title>
        <Card.Text>{product?.description}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Card.Text>{product.stock === 0? "Sin Stock": quantityAdded? `Agregados: ${quantityAdded}`: `En Stock: ${product.stock}`} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;