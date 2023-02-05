import React from 'react';

// components
import Hero from '../components/Layout/Hero';
import Events from '../components/Events/Events';
import EventFilter from '../components/Events/EventFilter';

const HomeScreen = () => {
  return (
    <main>
      <Hero />
      <EventFilter />
      <Events />
    </main>
  );
};

export default HomeScreen;
