import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
    </Router>
  );
};

export default App;
