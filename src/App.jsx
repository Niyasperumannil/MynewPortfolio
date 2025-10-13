import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero/Hero';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;