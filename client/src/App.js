import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// screens
import Home from './screens/Home';

// components
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
