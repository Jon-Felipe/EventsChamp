import React from 'react';

// components
import Select from '../UI/Select';

const EventFilter = () => {
  return (
    <section className='p-5 max-w-7xl mx-auto md:flex md:items-center md:justify-between'>
      <h3 className='text-3xl font-bold text-center'>Upcoming Events</h3>
      <div className='mt-5 grid grid-cols-3 gap-x-2 md:mt-0 md:gap-x-4'>
        <Select option='Weekdays' />
        <Select option='Event Type' />
        <Select option='Any Category' />
      </div>
    </section>
  );
};

export default EventFilter;
