import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MemoryProvider } from './context/MemoryContext';
import './App.css';

// We'll create these components next
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MemoryUpload from './components/MemoryUpload';
import GardenView from './components/GardenView';
import MemoryDetail from './components/MemoryDetail';
import MemoryExercise from './components/MemoryExercise';
import FlowerComponent from './path/to/FlowerComponent';

function App() {
  return (
    <MemoryProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<MemoryUpload />} />
            <Route path="/garden" element={<GardenView />} />
            <Route path="/memory/:id" element={<MemoryDetail />} />
            <Route path="/exercise" element={<MemoryExercise />} />
          </Routes>
        </div>
      </Router>
    </MemoryProvider>
  );
}

export default App;