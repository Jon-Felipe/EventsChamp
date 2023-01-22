import React from 'react';
import styled from 'styled-components';

const Filter = ({ option }) => {
  return (
    <FilterWrapper>
      <option value=''>{option}</option>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.select``;
