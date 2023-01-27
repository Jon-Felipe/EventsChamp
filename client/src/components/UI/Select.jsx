import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Select = ({ option }) => {
  return (
    <div className='bg-slate-200 flex items-center justify-between rounded-md shadow-md overflow-hidden'>
      <select className='bg-slate-200 w-full px-2 py-4 text-xs font-bold cursor-pointer outline-none appearance-none'>
        <option value=''>{option}</option>
      </select>
      <FaCaretDown className='text-violet-500 mx-1' size='1.8rem' />
    </div>
  );
};

export default Select;
