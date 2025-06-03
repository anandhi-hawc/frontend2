// Dashboard.jsx

import React from 'react';
// utils/getRandomGradient.js
const getRandomLightGradient = () => {
  const lightColors = ['#fceabb', '#f8b500', '#fdfbfb', '#e0c3fc', '#f9f9f9', '#d4fc79', '#96e6a1'];
  const color1 = lightColors[Math.floor(Math.random() * lightColors.length)];
  const color2 = lightColors[Math.floor(Math.random() * lightColors.length)];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};
const GradientCard  = ({children}) => {
 const gradientStyle = {
    background: getRandomLightGradient(),
    width: 'auto',
    height: '200px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    color: '#333',
    padding: '20px',
    transition: 'transform 0.3s',
  };

  return <div style={gradientStyle}>{children}</div>;
};

export default GradientCard;
