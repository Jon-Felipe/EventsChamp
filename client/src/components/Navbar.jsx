import React from 'react';
import styled from 'styled-components';

// extras
import { navLinks } from '../utils/constants';

const Navbar = () => {
  return (
    <NavWrapper>
      <ul className='nav-links'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  background-color: var(--grey-50);
  .nav-links {
    padding: 0.5rem;
    li {
      margin: 1rem auto;
    }
    a {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: 768px) {
    box-shadow: var(--shadow-1);
    .nav-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }
  }
`;
