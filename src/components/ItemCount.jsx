import React from "react";
import Button from 'react-bootstrap/Button';

export const SizesExample = ({count, handleCount}) => {
    return (
    <>
      <div>
        <Button variant="primary" size="sm" disabled={count <= 1} onClick={() => handleCount("minus")}>-</Button>
        {' '}
        <span id="counter">{count}</span>
        {' '}
        <Button variant="secondary" size="sm" onClick={() => handleCount("plus")}>+</Button>
      </div>
    </>
  );
}

export default SizesExample;