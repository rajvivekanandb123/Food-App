import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Protected = ({element}) => {
    const cartitems=useSelector((state)=>state.cart.cart)
  return cartitems.length > 0 ? element : <Navigate to='/' />
    
  
}

export default Protected
