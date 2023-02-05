import React from 'react';

// components
import Select from '../UI/Select';

const EventFilter = () => {
  return (
    <>
      <h3 className='text-xl font-bold text-center md:text-3xl'>
        Upcoming Events
      </h3>
      <div className='mt-8 grid grid-cols-3 gap-x-2 sm:mt-0 md:gap-x-4'>
        <Select option='Weekdays' />
        <Select option='Event Type' />
        <Select option='Any Category' />
      </div>
    </>
  );
};

export default EventFilter;
