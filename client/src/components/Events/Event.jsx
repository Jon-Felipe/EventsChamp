import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
// extras
import eventImg from '../../assets/dj.jpg';

const Event = ({ id, title, location, date, price, isFavourite }) => {
  return (
    <div className='relative'>
      <Link to={`/event/${id}`}>
        <div className='grid grid-rows-[300px_1fr]'>
          <img
            src={eventImg}
            alt={title}
            className='w-full h-full object-cover rounded-xl'
          />
          <div className='mt-3'>
            <h3 className='font-bold text-lg'>{title}</h3>
            <p>{location}</p>
            <p>{date}</p>
            <p className='font-bold'>${price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
      <div className='absolute top-4 right-4'>
        {isFavourite ? (
          <div className='bg-white rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
            <FaHeart size='1.3rem' className='text-red-500' />
          </div>
        ) : (
          <div className='bg-white rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
            <FaRegHeart size='1.3rem' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
