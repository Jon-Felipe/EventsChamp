import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

import { navLinks, userLinks } from '../utils/constants';

const Header = () => {
  const Navbar = () => {
    return (
      <ul className='nav-links'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    );
  };

  const UserLinks = () => {
    return (
      <div className='user-links'>
        <ul>
          {userLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <div className='header'>
        <h1>EventChamps</h1>
        <div className='toggle-btn'>
          <button>
            <FaTimes size='2.5rem' />
          </button>
        </div>
      </div>
      <Navbar />
      <UserLinks />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 100vh;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    h1 {
      font-weight: bold;
    }
  }
  .toggle-btn {
    button {
      background-color: transparent;
      border: transparent;
      cursor: pointer;
    }
  }
  .nav-links {
    padding: 1rem;
    li {
      margin: 0.5rem 0;
    }
    a {
      font-size: 1.25rem;
    }
  }
  .user-links {
    background-color: var(--black);
    height: 100%;
    padding: 1rem;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li {
      padding: 0.8rem;
      margin: 0 0.25rem;
      width: 100%;
      text-align: center;
      background-color: var(--amber);
      border-radius: var(--borderRadius);
    }
    a {
      color: var(--white);
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 300px auto;
    align-items: center;
    height: 5rem;
    background-color: var(--grey-50);
    box-shadow: var(--shadow-1);
    .header {
      h1 {
        font-size: 2rem;
      }
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      a {
        font-size: 1rem;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .user-links {
      background-color: var(--grey-50);
      height: unset;
      padding: 0rem;
      li {
        background-color: var(--primary-500);
        padding: 0.25rem 0.85rem;
        margin: 0 0.25rem;
        box-shadow: var(--shadow-1);
      }
      a {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 400px 250px;
    .header {
      h1 {
        font-size: 2.5rem;
      }
    }
    .nav-links {
      a {
        font-size: 1.25rem;
      }
    }
    .user-links {
      a {
        font-size: 1rem;
      }
    }
  }
`;
