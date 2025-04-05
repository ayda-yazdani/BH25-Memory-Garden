import React from 'react';
import flowerone from '../assets/images/flowerone.png';
import './FlowerComponent.css'; // Create this CSS file

function FlowerComponent() {
  return (
    <div className="image-container">
      <img 
        src= {flowerone} 
        alt= "Flower" 
        className="interactive-image"
      />
    </div>
  );
}

export default FlowerComponent;