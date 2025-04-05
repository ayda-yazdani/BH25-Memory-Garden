import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Memory Garden</h1>
      <p className="mb-6">
        A place to preserve and nurture your precious memories. Upload photos, create 
        your garden, and engage with memory exercises based on reminiscence therapy.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/upload" className="bg-purple-600 text-white px-4 py-2 rounded">
          Upload Memories
        </Link>
        <Link to="/garden" className="bg-green-600 text-white px-4 py-2 rounded">
          Visit Your Garden
        </Link>
        <Link to="/exercise" className="bg-blue-600 text-white px-4 py-2 rounded">
          Memory Exercises
        </Link>
      </div>
    </div>
  );
}

export default HomePage;