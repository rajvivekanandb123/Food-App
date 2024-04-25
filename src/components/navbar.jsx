import React from 'react'
import {Nav} from 'react-bootstrap';
import { setSearch } from '/home/raju/Desktop/food-app/src/Store/slices/searchslice.js'
import {  useDispatch } from 'react-redux';
const Navbar = () => {
  const today=new Date();
  const options={year:'numeric',month:'long',day:'numeric'}
  const final=today.toLocaleDateString('en-US',options)
  const dispatch=useDispatch();
    return (
   <Nav ><div style={{marginLeft:'15px'}}>
    <div style={{gap:'0px',paddingBottom:'2px',marginTop:'0px'}}>
        <h3 style={{color:'grey',fontFamily:'serif'}}>{final}</h3>
        <h2 style={{fontSize:'28px'}} >Food App</h2>
    </div>
    <div style={{position:'fixed',right:'1px',top:'5px'}} >
        <input onChange={(e)=>{
         dispatch(setSearch(e.target.value))
        }} style={{ borderRadius:'4px',marginRight:'3px',height:'32px',border:'solid black 2px'}} type='search' name='search' placeholer='search here'  />
    </div>
    </div>
   </Nav>
  )
}

export default Navbar;

