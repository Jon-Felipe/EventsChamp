import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// screens
import HomeScreen from './screens/HomeScreen';

// components
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
