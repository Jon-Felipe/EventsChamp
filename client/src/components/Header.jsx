import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// extras
import { links } from '../utils/constants';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='nav-header'>
        <div className='logo'>
          <h2>EventsChamp</h2>
        </div>
        <div className='toggle-btn'>
          <button>
            <FaTimes size='2rem' />
          </button>
        </div>
      </div>
      <nav className='nav-links'>
        <ul className='link-list'>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  padding: 0 1rem;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
  }
  .toggle-btn {
    button {
      background: transparent;
      border: transparent;
      cursor: pointer;
    }
  }
  .link-list {
    li {
      padding: 10px 0;
      a {
        font-size: 1.25rem;
      }
    }
  }
  .link-list li:hover {
    padding-left: 2rem;
    background-color: var(--grey-100);
    transition: var(--transition);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    align-items: center;
    .toggle-btn {
      display: none;
    }
    .link-list {
      display: flex;
      justify-content: space-between;
      li {
        padding: unset;
      }
      li:hover {
        padding-left: unset;
        background-color: unset;
        text-decoration: underline;
        transition: var(--transition);
      }
    }
  }
`;
