import React from 'react';

// components
import Select from '../components/UI/Select';
import Event from '../components/Events/Event';
import Card from '../components/UI/Card';

// extras
import { events } from '../utils/dummy-data';

const HomeScreen = () => {
  return (
    <section className='p-4'>
      {/* Events filter */}
      <article className='max-w-6xl mx-auto sm:flex sm:items-center sm:justify-between'>
        <h3 className='text-4xl font-bold text-center sm:text-2xl md:text-3xl'>
          Upcoming Events
        </h3>
        <div className='mt-8 grid grid-cols-3 gap-x-2 sm:mt-0 md:gap-x-4'>
          <Select option='Weekdays' />
          <Select option='Event Type' />
          <Select option='Any Category' />
        </div>
      </article>
      {/* Event Cards */}
      <article className='mt-8 max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
        {events.map((event) => (
          <Event
            key={event.id}
            title={event.title}
            location={event.location}
            venue={event.venue}
            date={event.date}
            price={event.price}
          />
        ))}
      </article>
    </section>
  );
};

export default HomeScreen;
