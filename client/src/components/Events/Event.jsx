import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ title, location, date, price }) => {
  return (
    <EventWrapper>
      <img src={eventImg} alt='dj deck' />
      <div className='event-content'>
        <div className='event-date'>
          <p className='month'>{date.split(' ')[1]}</p>
          <p className='day'>{date.split(' ')[0]}</p>
        </div>
        <div className='event-info'>
          <h5>{title}</h5>
          <p>{location}</p>
        </div>
        <div className='event-blurbs'>
          <p className='price'>${price.toFixed(2)}</p>
          <div className='fav-icon'>
            <FaHeart />
          </div>
        </div>
      </div>
    </EventWrapper>
  );
};

export default Event;

const EventWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 150px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .event-content {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-column-gap: 1rem;
    padding: 1rem;
  }
  .event-date {
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
    .month {
      color: var(--primary-500);
      font-size: 1.2rem;
    }
    .day {
      color: var(--black);
      font-size: 1.75rem;
    }
  }
  .event-info {
    letter-spacing: 2px;
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--grey-600);
    }
  }
  .event-blurbs {
    position: absolute;
    top: 10px;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      background-color: var(--white);
      border-radius: var(--borderRadius);
      padding: 10px 15px;
      font-weight: bold;
      font-size: 0.85rem;
    }
    .fav-icon {
      background-color: var(--white);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: var(--red);
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .event-info {
      h5 {
        font-size: 1rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }
`;
