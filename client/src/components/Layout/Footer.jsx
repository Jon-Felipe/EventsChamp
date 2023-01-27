import React from 'react';
// import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-indigo-900 p-8 grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 sm:justify-items-center'>
      {/* Product Links */}
      <div>
        <h4 className='text-white font-semibold text-2xl underline'>Product</h4>
        <ul>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Key Features
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Pricing
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Event Ticketing
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Booking
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Online Promotion
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Developers
          </li>
        </ul>
      </div>
      {/* Explore Links */}
      <div>
        <h4 className='text-white font-semibold text-2xl underline'>
          Explore More
        </h4>
        <ul>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            How It Works
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Download App
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Event Promoter
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Sell Tickets
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Event Organiser
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Nonprofits & Fundraisers
          </li>
        </ul>
      </div>
      {/* Connect Links */}
      <div>
        <h4 className='text-white font-semibold text-2xl underline'>
          Connect With Us
        </h4>
        <ul>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Customer Support
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Download App
          </li>
          <li className='text-slate-300 font-semibold my-2 cursor-pointer hover:text-white'>
            Event Promoter
          </li>
          <li className='text-slate-300 flex items-center cursor-pointer hover:text-white'>
            <FaFacebook className='mr-2' /> Facebook
          </li>
          <li className='text-slate-300 flex items-center cursor-pointer hover:text-white'>
            <FaTwitter className='mr-2' /> Twitter
          </li>
          <li className='text-slate-300 flex items-center cursor-pointer hover:text-white'>
            <FaInstagram className='mr-2' /> Instagram
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
