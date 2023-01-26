import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Product Links */}
      <div>
        <h4>Product</h4>
        <ul>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Event Ticketing</li>
          <li>Booking</li>
          <li>Online Promotion</li>
          <li>Developers</li>
        </ul>
      </div>
      {/* Explore Links */}
      <div>
        <h4>Explore More</h4>
        <ul>
          <li>How It Works</li>
          <li>Download App</li>
          <li>Event Promoter</li>
          <li>Sell Tickets</li>
          <li>Event Organiser</li>
          <li>Nonprofits & Fundraisers</li>
        </ul>
      </div>
      {/* Connect Links */}
      <div>
        <h4>Connect With Us</h4>
        <ul>
          <li>Customer Support</li>
          <li>Download App</li>
          <li>Event Promoter</li>
          <li className='social-link'>
            <FaFacebook /> Facebook
          </li>
          <li className='social-link'>
            <FaTwitter /> Twitter
          </li>
          <li className='social-link'>
            <FaInstagram /> Instagram
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--blue-dark);
  padding: 2rem;
  display: grid;
  grid-row-gap: 1rem;
  h4 {
    color: var(--white);
  }
  li {
    color: #6a7c94;
    margin: 1rem 0;
    cursor: pointer;
  }
  .social-link {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    li:hover {
      color: var(--white);
      transition: var(--transition);
    }
  }
`;
