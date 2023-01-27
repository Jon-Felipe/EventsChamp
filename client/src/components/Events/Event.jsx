import React from 'react';
import { FaHeart } from 'react-icons/fa';

// components
import Card from '../UI/Card';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ title, location, date, venue }) => {
  return (
    <Card>
      <div className='grid grid-rows-[220px_150px]'>
        <img
          src={eventImg}
          alt='dj deck'
          className='w-full h-full object-cover'
        />
        <div className='flex items-center justify-evenly'>
          <div className='basis-1/5'>
            <p className='text-violet-500 text-2xl font-bold text-center sm:text-base xl:text-2xl'>
              {date.split(' ')[1]}
            </p>
            <p className='text-xl font-bold text-center sm:text-base xl:text-2xl'>
              {date.split(' ')[0]}
            </p>
          </div>
          <div className='basis-4/5'>
            <h4 className='font-bold text-xl sm:text-base xl:text-xl'>
              {title}
            </h4>
            <p className='text-slate-500 sm:text-sm xl:text-base'>{location}</p>
            <p className='text-slate-500 sm:text-sm xl:text-base'>{venue}</p>
          </div>
          {/* <div className='event-blurbs'>
          <p className='price'>${price.toFixed(2)}</p>
          <div className='fav-icon'>
            <FaHeart />
          </div>
        </div> */}
        </div>
      </div>
    </Card>
  );
};

export default Event;
