import React from 'react';

// components
import Hero from '../components/Layout/Hero';
import Select from '../components/UI/Select';
import Event from '../components/Events/Event';

// extras
import { events } from '../utils/dummy-data';

const HomeScreen = () => {
  return (
    <main>
      {/* Hero Carousel */}
      <Hero />
      {/* Events filter */}
      <section className='max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between'>
        <h3 className='text-xl font-bold text-center md:text-3xl'>
          Upcoming Events
        </h3>
        <div className='mt-8 grid grid-cols-3 gap-x-2 sm:mt-0 md:gap-x-4'>
          <Select option='Weekdays' />
          <Select option='Event Type' />
          <Select option='Any Category' />
        </div>
      </section>
      {/* Event Cards */}
      <section className='mt-8 max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {events.map((event) => (
          <Event
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            price={event.price}
            isFavourite={event.isFavourite}
          />
        ))}
      </section>
    </main>
  );
};

export default HomeScreen;
