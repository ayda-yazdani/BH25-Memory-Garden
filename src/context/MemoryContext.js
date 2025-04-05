import React, { createContext, useState, useEffect } from 'react';

export const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
  const [memories, setMemories] = useState([]);
  
  // Load memories from localStorage when the app starts
  useEffect(() => {
    const savedMemories = localStorage.getItem('memories');
    if (savedMemories) {
      setMemories(JSON.parse(savedMemories));
    }
  }, []);
  
  // Save memories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('memories', JSON.stringify(memories));
  }, [memories]);
  
  const addMemory = (memory) => {
    setMemories([...memories, { ...memory, id: Date.now().toString() }]);
  };
  
  const getMemory = (id) => {
    return memories.find(memory => memory.id === id);
  };
  
  const updateMemory = (updatedMemory) => {
    setMemories(memories.map(memory => 
      memory.id === updatedMemory.id ? updatedMemory : memory
    ));
  };
  
  return (
    <MemoryContext.Provider value={{ 
      memories, 
      addMemory, 
      getMemory, 
      updateMemory 
    }}>
      {children}
    </MemoryContext.Provider>
  );
};