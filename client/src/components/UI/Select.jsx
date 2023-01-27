import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Select = ({ option }) => {
  return (
    <div className='bg-slate-200 flex items-center justify-between rounded-md shadow-md overflow-hidden'>
      <select className='bg-slate-200 w-full p-2 text-xs font-bold cursor-pointer outline-none appearance-none md:text-base'>
        <option value=''>{option}</option>
      </select>
      <FaCaretDown className='text-violet-500 mx-1' size='1.5rem' />
    </div>
  );
};

export default Select;
