import React from 'react';
import { FaHeart } from 'react-icons/fa';

// components
import Card from '../UI/Card';

// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ title, location, date, venue, price }) => {
  return (
    <Card>
      <div className='relative'>
        <img src={eventImg} alt='dj deck' />
        <div className='flex items-center p-4 gap-x-2'>
          <div className='basis-1/6 text-center'>
            <p className='text-violet-500 font-bold text-lg sm:text-base lg:text-lg'>
              {date.split(' ')[1]}
            </p>
            <p className='font-bold text-lg sm:text-base lg:text-lg'>
              {date.split(' ')[0]}
            </p>
          </div>
          <div className='basis-5/6'>
            <h4 className='font-bold text-lg sm:text-sm lg:text-base'>
              {title}
            </h4>
            <p className='text-slate-500 sm:text-sm'>{location}</p>
            <p className='text-slate-500 sm:text-sm'>{venue}</p>
          </div>
          <div className='absolute top-4 left-0 px-4 w-full flex items-center justify-between'>
            <p className='bg-white rounded-md px-4 py-2 font-bold'>
              ${price.toFixed(2)}
            </p>
            <div className='bg-white text-red-500 rounded-full p-4'>
              <FaHeart size='1.3rem' className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Event;
