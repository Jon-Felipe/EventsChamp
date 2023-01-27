import React from 'react';

const Card = ({ children }) => {
  return <div className='rounded-xl shadow-md overflow-hidden'>{children}</div>;
};

export default Card;
