import React from 'react';
import { FaUser, FaUserPlus } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    text: 'Home',
    url: '',
  },
  {
    id: 2,
    text: 'Events',
    url: '',
  },
  {
    id: 3,
    text: 'Calendar',
    url: '',
  },
  {
    id: 4,
    text: 'Venues',
    url: '',
  },
  {
    id: 5,
    text: 'Schedules',
    url: '',
  },
];

export const userLinks = [
  {
    id: 1,
    text: 'Sign In',
    url: '',
    icon: <FaUser />,
  },
  {
    id: 2,
    text: 'Sign Up',
    url: '',
    icon: <FaUserPlus />,
  },
];
