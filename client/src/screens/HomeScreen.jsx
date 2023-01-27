import React from 'react';

// components
import Select from '../components/UI/Select';
import Event from '../components/Events/Event';
import Card from '../components/UI/Card';

// extras
import { events } from '../utils/dummy-data';

const HomeScreen = () => {
  return (
    <main>
      {/* Events filter */}
      <section className='event-header'>
        <h3>Upcoming Events</h3>
        <div className='event-filters'>
          <Select option='Weekdays' />
          <Select option='Event Type' />
          <Select option='Any Category' />
        </div>
      </section>
      {/* Event Cards */}
      <section className='event-cards'>
        {events.map((event) => (
          <Card key={event.id}>
            <Event
              title={event.title}
              location={event.location}
              date={event.date}
              price={event.price}
            />
          </Card>
        ))}
      </section>
    </main>
  );
};

export default HomeScreen;
