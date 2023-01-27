import React from 'react';
import { FaHeart } from 'react-icons/fa';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ title, location, date, price }) => {
  return (
    <div>
      <img src={eventImg} alt='dj deck' />
      <div className='event-content'>
        <div className='event-date'>
          <p className='month'>{date.split(' ')[1]}</p>
          <p className='day'>{date.split(' ')[0]}</p>
        </div>
        <div className='event-info'>
          <h4>{title}</h4>
          <p>{location}</p>
        </div>
        <div className='event-blurbs'>
          <p className='price'>${price.toFixed(2)}</p>
          <div className='fav-icon'>
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
