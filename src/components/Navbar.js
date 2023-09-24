import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className='navbar'>
      <div className='navInnerWrap'>
        <button className='navHeading' onClick={()=>Navigate('/')}> AI Counsellor!</button>
        <button className='nav_btn hover-underline-animation' onClick={()=>Navigate('/streams')}>All Streams</button>
      </div>
    </div>
  )
}

export default Navbar