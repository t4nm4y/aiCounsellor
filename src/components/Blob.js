import React, { useState, useEffect } from 'react';
import './Blob.css';
import { useSpring, animated } from 'react-spring';

function isMobile() {
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i);
}
const Blob = () => {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [maxTop, setMaxTop] = useState(window.innerHeight);
  
  const handleMouseMove = (event) => {
    const cardwrap = document.querySelector('.cardWrap');
    if (cardwrap) {
      const cardwrapHeight = cardwrap.clientHeight;
      setMaxTop(`${cardwrapHeight}px`);
    }
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  
  const handleScroll = () => {
    const cardwrap = document.querySelector('.cardWrap');
    // Calculate the maximum top position based on the cardwrap element's height
    if (cardwrap) {
      const cardwrapHeight = cardwrap.clientHeight;
      setMaxTop(`${cardwrapHeight}px`);
    }
    setMousePosition((prevPosition) => ({
      x: prevPosition.x,
      y: mousePosition.y,
    }));
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if(isMobile()) {return;}
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const position = useSpring({
    left: `${mousePosition.x}px`,
    top: `${Math.min(mousePosition.y + window.scrollY, parseFloat(maxTop)-250)}px`,
    config: { duration: 300 },
  });
  return (
    <>
      <div className='blur-overlay'></div>
      <animated.div className='Blob' style={position}></animated.div>
    </>
  );
};

export default Blob;
