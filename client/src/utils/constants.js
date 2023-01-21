import React from 'react';
import { FaUser, FaUserPlus } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Events',
    url: '/events',
  },
  {
    id: 3,
    text: 'Calendar',
    url: '/calendar',
  },
  {
    id: 4,
    text: 'Venues',
    url: '/venues',
  },
  {
    id: 5,
    text: 'Schedules',
    url: '/schedules',
  },
];

export const userLinks = [
  {
    id: 1,
    text: 'Sign In',
    url: '/signin',
    icon: <FaUser />,
  },
  {
    id: 2,
    text: 'Sign Up',
    url: '/signup',
    icon: <FaUserPlus />,
  },
];
