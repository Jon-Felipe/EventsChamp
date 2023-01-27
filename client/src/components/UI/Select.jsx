import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Select = ({ option }) => {
  return (
    <div>
      <select>
        <option value=''>{option}</option>
      </select>
      <FaCaretDown color='#7848f4' size='1.35rem' />
    </div>
  );
};

export default Select;
