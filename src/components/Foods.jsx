import React from 'react';
import Food from './Food.jsx';
import FoodData from '/home/raju/Desktop/food-app/src/data/data.js'; // Restored original import path
import toast, { Toaster } from 'react-hot-toast'; 
import { useSelector } from 'react-redux';

const Foods = () => {
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };
  
  const handleDelete = (name) => {
    toast.success(`${name} deleted from cart`); // Corrected function name and string interpolation
  };
  
  const category = useSelector((state) => state.category.category); // Corrected useSelector syntax
const search=useSelector((state)=>state.search.search)
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', justifyContent: 'space-around' }}>
        {FoodData.filter((food) => {
          if(category === 'All' && !search){
            return true
          }else if(category === 'All' && search){
            return food.name.toLowerCase().includes(search.toLowerCase())
          }else if(category !== 'All' && !search){
            return category === food.category
          }else if(category !== 'All' && search){
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map((item) => ( // Added parentheses around the mapping function
          <Food
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            desc={item.desc}
            category={item.category}
            rating={item.rating}
            handletoast={() => handleToast(item.name)}
            handletoastdelete={() => handleDelete(item.name)}
          />
        ))}
      </div>
    </>
  );
}

export default Foods;
