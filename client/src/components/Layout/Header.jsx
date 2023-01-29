import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const UserLinks = () => {
    return (
      <nav>
        <ul className='flex items-center justify-between gap-x-2 lg:gap-x-5'>
          <li className='py-2 px-6'>
            <Link to='/login' className='text-lg font-medium tracking-wider'>
              Login
            </Link>
          </li>
          <li className='bg-violet-200 py-2 px-6 rounded-lg'>
            <Link
              to='/sign-up'
              className='text-lg text-violet-700 font-medium tracking-wider'
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className='flex items-center justify-between h-20 px-5 max-w-7xl mx-auto xl:px-0'>
      <Link to='/' className='font-bold text-3xl'>
        EventsChamps
      </Link>
      <UserLinks />
    </header>
  );
};

export default Header;
