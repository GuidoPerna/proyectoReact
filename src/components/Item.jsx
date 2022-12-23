import React from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useGetItemImg } from "../hooks/usegetItemImg";

export const Item = ({product, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product?.img);

  function handleNavigate() {
    navigate(`/item/${product?.id}`);
  };

  return (
    <Card style={{ width: '18rem' }} onClick={handleNavigate}>
      <Card.Img variant="top" src={img} alt={product?.name} />
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