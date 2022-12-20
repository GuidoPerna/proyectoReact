import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product?.id}`);
  }

  return (
    <Card style={{ width: '18rem' }} onClick={handleNavigate}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product?.name}</Card.Title>
        <Card.Text>{product?.description}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Card.Text>Stock: {product?.stock}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;