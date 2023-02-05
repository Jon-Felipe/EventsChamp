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

      <section className='max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between'>
        <EventFilter />
      </section>

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
