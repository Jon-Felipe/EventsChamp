import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

import { userLinks } from '../utils/constants';

const Header = () => {
  const UserLinks = () => {
    return (
      <nav className='user-links'>
        <ul>
          {userLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <HeaderWrapper>
      <div className='header-content'>
        <div className='header'>
          <h1>EventChamps</h1>
          <div className='toggle-btn'>
            <button>
              <FaTimes size='2.5rem' />
            </button>
          </div>
        </div>
        <UserLinks />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: var(--grey-50);
  padding: 0.5rem;
  .header-content {
    max-width: 1140px;
    margin: 0 auto;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    button {
      background-color: transparent;
      border: transparent;
      cursor: pointer;
    }
  }
  .user-links {
    margin: 1rem auto;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
    li {
      background-color: var(--amber);
      padding: 0.8rem;
      border: 1px solid transparent;
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-1);
      cursor: pointer;
    }
    li:hover {
      background-color: var(--white);
      border: 1px solid var(--amber);
      transition: var(--transition);
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
      text-transform: uppercase;
    }
    svg {
      margin-right: 0.5rem;
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 768px) {
    .header-content {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .user-links {
      margin: 0 auto;
    }
  }
`;
