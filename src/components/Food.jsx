import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addtocart } from '/home/raju/Desktop/food-app/src/Store/slices/cartslice.js';

const Food = ({ id, img, name, price, desc, rating,handletoast }) => {
  const dispatch = useDispatch();
  const [isHovered, setisHovered] = useState(false);

  function enter() {
    setisHovered(true);
  }

  function leave() {
    setisHovered(false);
  }

  const handleAddToCart = () => {
    dispatch(addtocart({ id, name, img, price, rating, qty: 1 }));
    handletoast()
  };

  return (
    <div style={{ height: '400px', width: '300px', cursor: 'grab' }} onMouseEnter={enter} onMouseLeave={leave}>
      <img src={img} alt='Food' style={{ height: isHovered ? '150px' : '140px', transition: 'height 0.4s ,width 0.4s' }} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <span><h4>{name}</h4></span>
        <div style={{ marginRight: '0px' }}>
          <p style={{ color: 'green' }}>₹{price}</p>
        </div>
      </div>
      <div>{desc.slice(0, 35)}</div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CiStar style={{ color: 'yellow', height: '35px' }} />
          <p>{rating}</p>
        </div>
        <button onClick={handleAddToCart} style={{ border: 'solid black 2px', borderRadius: '20px', backgroundColor: 'hsl(120, 73%, 75%)', padding: '2px' }} className='bg-green-600'>Add to cart</button>
      </div>
    </div>
  );
}

export default Food;
