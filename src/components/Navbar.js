import React from 'react'
import { useState, useEffect } from 'react';
import './Navbar.css';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);
  
  return scrollDirection;
};

const Navbar = ({ toggleTheme }) => {

  const scrollDirection = useScrollDirection();
  return (
    <div className={`navbar ${scrollDirection === "down" ? "hide" : ""}`}>
      <div className='navInnerWrap'>
        <h1 style={{fontWeight:50}}> Your AI Counsellor!</h1>
        

        <div className='rightBtn'>
        {/* theme toggle */}
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar