import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// screens
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';

// components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/event/:id' element={<EventScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
