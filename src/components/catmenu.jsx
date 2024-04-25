import React, { useEffect, useState } from 'react';
import FoodData from '/home/raju/Desktop/food-app/src/data/data.js';
import { setcategory } from '/home/raju/Desktop/food-app/src/Store/slices/categoryslice.js';
import { useDispatch, useSelector } from 'react-redux';

const Catmenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const realcategory = useSelector((state) => state.category.category);

  useEffect(() => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }, []);

  function enter(e) {
    e.target.style.backgroundColor = 'green';
  }

  function leave(e) {
    e.target.style.backgroundColor = realcategory === e.target.innerText ? 'red' : 'white';
  }

  return (
    <div style={{ marginLeft: '15px', marginTop: '33px' }}>
      <h2 style={{ fontSize: '20px' }}>Find the best food</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => {
            console.log('All is clicked');
            dispatch(setcategory('All'));
          }}
          style={{
            borderRadius: '4px',
            fontSize: '17px',
            border: 'solid black 1px',
            padding: '5px',
            backgroundColor: realcategory === 'All' ? 'green' : 'white',
          }}
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          All
        </button>
  
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              console.log(`Clicked ${category} button`);
              dispatch(setcategory(category));
            }}
            className={realcategory === category ? "bg-green-500 text-white" : ""}  
            style={{
              borderRadius: '4px',
              fontSize: '17px',
              border: 'solid black 1px',
              padding: '5px',
              backgroundColor: realcategory === category ? 'red' : 'white',
            }}
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            {category}
          </button>
        ))}
      </div>
      <div>Selected Category: {realcategory}</div> {/* Log the selected category */}
    </div>
  );
};

export default Catmenu;
