import React from 'react';
import { useParams } from 'react-router-dom';

function MemoryDetail() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Memory Details</h1>
      <p>Viewing memory with ID: {id}</p>
    </div>
  );
}

export default MemoryDetail;