import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removefromcart, increment, decrement } from '/home/raju/Desktop/food-app/src/Store/slices/cartslice.js';

const Cartitem = ({ id, name, img, price, qty, deleted }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removefromcart({ id }));
    if (deleted) deleted();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      border: 'solid black 2px',
      borderRadius: '10px',
      margin: '3px',
      padding: '3px',
      alignItems: 'center', // Align items vertically
      position: 'relative' // Remove absolute positioning
    }}>
      <img src={img} alt={name} style={{ height: '70px', width: '80px' }} />
      <div style={{ marginLeft: '10px' }}>
        <h4>{name}</h4>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{price}</span>
          <div style={{ gap: '5px' }}>
            <button onClick={() => dispatch(decrement({ id }))} style={{ height: '20px', width: '20px', border: 'solid black 2px', borderRadius: '7px', fontSize: '15px' }}>-</button>
            <span style={{ color: 'darkgreen' }}>{qty}</span>
            <button onClick={() => dispatch(increment({ id }))} style={{ height: '20px', width: '20px', border: 'solid black 2px', borderRadius: '7px', fontSize: '15px' }}>+</button>
          </div>
          <MdDelete onClick={handleDelete} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
