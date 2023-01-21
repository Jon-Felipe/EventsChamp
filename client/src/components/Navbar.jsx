import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// extras
import { navLinks } from '../utils/constants';

const Navbar = () => {
  return (
    <NavWrapper>
      <ul className='nav-links'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
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
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media screen and (min-width: 768px) {
    box-shadow: var(--shadow-1);
    .nav-links {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: none;
      justify-items: center;
      a {
        font-size: 1.2rem;
      }
      a:hover {
        color: var(--primary-500);
        transition: var(--transition);
      }
    }
  }
`;
