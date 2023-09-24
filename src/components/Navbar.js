import React from 'react'
import './Navbar.css';

const Navbar = ({ toggleTheme }) => {

  return (
    <div className='navbar'>
      <div className='navInnerWrap'>
        <span className='navHeading'> AI Counsellor!</span>
        <button className='nav_btn hover-underline-animation'>All Streams</button>
      </div>
    </div>
  )
}

export default Navbar