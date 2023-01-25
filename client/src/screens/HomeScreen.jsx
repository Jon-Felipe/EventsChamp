import React from 'react';

import styled from 'styled-components';

// components
import Select from '../components/UI/Select';
import Event from '../components/Events/Event';

const HomeScreen = () => {
  return (
    <HomeWrapper>
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
        <Event />
        <Event />
        <Event />
        <Event />
      </section>
    </HomeWrapper>
  );
};

export default HomeScreen;

const HomeWrapper = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
  .event-filters {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 1rem;
    margin-top: 1rem;
  }
  .event-cards {
    display: grid;
    grid-row-gap: 1rem;
  }

  @media screen and (min-width: 768px) {
    .event-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .event-filters {
      grid-template-columns: repeat(3, 145px);
      grid-template-rows: none;
      grid-column-gap: 1rem;
      margin-top: 0;
    }
  }
`;
