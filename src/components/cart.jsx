import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import Cartitem from '/home/raju/Desktop/food-app/src/components/cartitem.jsx';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cartItems = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    function enter() {
        setIsHovered(true);
    }

    function leave() {
        setIsHovered(false);
    }

    function deleted(name) {
        toast.success(`${name} deleted from cart`);
    }

    function handleCheckout() {
        // Perform checkout logic here
        // If checkout is successful, navigate to the success page
        navigate('/success');
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div id='one' style={{ position: 'fixed', top: '0', right: '0', backgroundColor: 'white', height: '650px', width: '300px', visibility: isHovered ? 'visible' : 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', margin: '10px' }}>
                    <h3>My order</h3>
                    <MdOutlineCancel onClick={() => setIsHovered(false)} style={{ height: '20px', width: '20px', backgroundColor: isHovered ? 'red' : 'white' }} onMouseEnter={enter} onMouseLeave={leave} />
                </div>
                {cartItems.length > 0 ? cartItems.map((item) => (
                    <Cartitem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        qty={item.qty}
                        price={item.price}
                        deleted={() => deleted(item.name)}
                    />
                )) : <h2 style={{ color: 'red' }}>Cart is empty</h2>}
                <div style={{ position: 'absolute', bottom: '3px', left: '5px', right: '5px', border: '1px solid red', backgroundColor: 'rgba(255, 0, 0, 0.3)' }}>
                    <h5>Items: {totalQuantity}</h5>
                    <h5>Total Amount: {totalPrice}</h5>
                    <hr style={{ border: 'solid black 1px' }} />
                    <button onClick={handleCheckout} style={{ backgroundColor: 'green', borderRadius: '10px', marginLeft: '100px', width: '100px' }}>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
