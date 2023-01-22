import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Header = () => {
  const UserLinks = () => {
    return (
      <nav className='user-links'>
        <Link to='/login' className='login'>
          Login
        </Link>
        <Link to='/sign-up' className='sign-up'>
          Sign Up
        </Link>
      </nav>
    );
  };

  return (
    <HeaderWrapper>
      <div className='header'>
        <h1>EventsChamp</h1>
        <div className='toggle-btn'>
          <button>
            <FaTimes size='2.5rem' />
          </button>
        </div>
      </div>
      <UserLinks />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  max-width: 1140px;
  padding: 1rem;
  margin: 0 auto;
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
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    a {
      text-align: center;
      padding: 0.8rem 1.5rem;
      font-weight: 700;
      background-color: transparent;
      cursor: pointer;
    }
    .sign-up {
      background-color: var(--primary-500);
      color: var(--white);
      border-radius: var(--borderRadius);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header {
      h1 {
        font-size: 2.5rem;
      }
    }
    .toggle-btn {
      display: none;
    }
    .user-links {
      margin-top: 0;
    }
  }
`;
