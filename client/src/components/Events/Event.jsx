import React from 'react';
import styled from 'styled-components';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ title, desc, image }) => {
  return (
    <EventWrapper>
      <img src={eventImg} alt='dj deck' />
      <div className='event-content'>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </EventWrapper>
  );
};

export default Event;

const EventWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .event-content {
    padding: 1rem;
    p {
      color: var(--grey-500);
    }
  }
`;
