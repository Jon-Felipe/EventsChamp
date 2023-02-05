import React from 'react';

// components
import Event from './Event';

// extras
import { events } from '../../utils/dummy-data';

const Events = () => {
  return (
    <section>
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
  );
};

export default Events;
