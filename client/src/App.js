import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// screens
import HomeScreen from './screens/HomeScreen';

// components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
