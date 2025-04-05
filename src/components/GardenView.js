import React from 'react';
import FlowerComponent from '/src/components/FlowerComponent';

function GardenView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Memory Garden</h1>
      <p>Garden visualization will go here</p>
      <FlowerComponent />
    </div>
  );
}

export default GardenView;