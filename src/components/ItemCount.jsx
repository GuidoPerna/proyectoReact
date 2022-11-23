import React,{useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';

export const SizesExample = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count -1);
    }

    const increase = () => {
        setCount(count +1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    } ,[initial])

  return (
    <>
      <div>
        <Button variant="primary" size="sm" disabled={count <= 1} onClick={decrease}>-</Button>
        {' '}
        <span>{count}</span>
        {' '}
        <Button variant="secondary" size="sm" disabled={count >= stock} onClick={increase}>+</Button>
        <div>
        <Button variant="dark" disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar</Button>
        </div>
      </div>
    </>
  );
}

export default SizesExample;