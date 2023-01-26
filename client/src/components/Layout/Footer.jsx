import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Product Links */}
      <div>
        <p>Product</p>
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
        <p>Explore More</p>
        <ul>
          <li>How It Works</li>
          <li>Download App</li>
          <li>Event Promoter</li>
          <li>Sell Tickets</li>
          <li>Event Organiser</li>
          <li>Nonprofits & Fundraisers</li>
        </ul>
        {/* Connect Links */}
        <div>
          <p>Connect With Us</p>
          <ul>
            <li>Customer Support</li>
            <li>Download App</li>
            <li>Event Promoter</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer``;
