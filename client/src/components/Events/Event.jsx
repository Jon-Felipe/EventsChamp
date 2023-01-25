import React from 'react';
import styled from 'styled-components';

// components
import Card from '../UI/Card';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = () => {
  return (
    <Card>
      <EventWrapper>
        <img src={eventImg} alt='dj deck' />
        <div className='events-content'>
          <h5>Dream World Wide in Jakarta</h5>
        </div>
      </EventWrapper>
    </Card>
  );
};

export default Event;

const EventWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
