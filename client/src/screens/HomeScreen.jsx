import React from 'react';

// components
import Hero from '../components/Layout/Hero';
import EventFilter from '../components/Events/EventFilter';
import Event from '../components/Events/Event';

// extras
import { events } from '../utils/dummy-data';

const HomeScreen = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section className='max-w-7xl mx-auto my-5 px-5 sm:flex sm:items-center sm:justify-between 2xl:px-0'>
        <EventFilter />
      </section>

      <section className='max-w-7xl mx-auto px-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:px-0'>
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
