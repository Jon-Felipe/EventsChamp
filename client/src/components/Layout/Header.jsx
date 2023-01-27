import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const UserLinks = () => {
    return (
      <nav className='mt-4 sm:mt-0'>
        <ul className='grid grid-cols-2 gap-x-4 sm:grid-cols-[150px_150px]'>
          <li className='text-center bg-white p-2 rounded-md shadow-md'>
            <Link to='/login' className='text-lg font-medium tracking-wider'>
              Login
            </Link>
          </li>
          <li className='bg-violet-500 p-2 text-center rounded-md shadow-md'>
            <Link
              to='/sign-up'
              className='text-lg text-white font-medium tracking-wide'
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className='p-4 shadow-md'>
      <div className='max-w-6xl mx-auto sm:flex sm:justify-between sm:items-center'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='font-bold text-4xl'>
            EventsChamps
          </Link>
          <button className='sm:hidden'>
            <FaTimes size='2rem' />
          </button>
        </div>
        <UserLinks />
      </div>
    </header>
  );
};

export default Header;
