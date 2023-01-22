import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

const Select = ({ option }) => {
  return (
    <SelectWrapper>
      <select>
        <option value=''>{option}</option>
      </select>
      <FaCaretDown color='#7848f4' size='1.35rem' />
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  position: relative;
  select {
    width: 100%;
    padding: 0.75rem 0.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    background-color: var(--grey-50);
    border-radius: 0.5rem;
    appearance: none;
    cursor: pointer;
  }
  select:focus {
    outline: none;
  }
  svg {
    position: absolute;
    right: 5px;
    top: 9px;
  }
`;
