import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { Button } from 'react-bootstrap';
import Navbar from '/home/raju/Desktop/food-app/src/components/navbar.jsx';
import Catmenu from '/home/raju/Desktop/food-app/src/components/catmenu.jsx';
import Foods from '/home/raju/Desktop/food-app/src/components/Foods.jsx';
import Cart from '/home/raju/Desktop/food-app/src/components/cart.jsx'
import { FaShoppingCart } from "react-icons/fa";
const Home = () => {
  return (
    <div style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
      <Navbar />
      <Catmenu />
      <Foods />
      <Cart />
      <FaShoppingCart onClick={() => {
        document.getElementById('one').style.visibility = 'visible';
      }} style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        border: 'solid black 2px',
        height: '30px',
        width: '30px',
        borderRadius: '20px'
      }} />
    </div>
  );
}

export default Home;
