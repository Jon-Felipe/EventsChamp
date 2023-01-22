import React from 'react';
import styled from 'styled-components';

// components
import Filter from '../components/UI/Filter';

const HomeScreen = () => {
  return (
    <HomeWrapper>
      {/* Events section */}
      <section className='events'>
        <h3>Upcoming Events</h3>
        <Filter option='Weekdays' />
        <Filter option='Event Type' />
        <Filter option='Any Category' />
      </section>
    </HomeWrapper>
  );
};

export default HomeScreen;

const HomeWrapper = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1rem;
`;
