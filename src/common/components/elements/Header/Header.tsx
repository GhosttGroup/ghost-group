import React from 'react';

import { Link } from 'react-router-dom';
import { headerArray } from '../../../config';
import Button from '../Button';

import './header.css';

//TODO set anchors
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-container'>
          <Link className='link-logo' to='#'>
            <img className='img-logo' src='/assets/Group3.svg' alt='logo' />
          </Link>
        </div>
        <nav className='nav'>
          <ul className='list'>
            {headerArray.map((item, index) => (
              <li className='item' key={index}>
                <Link className='text-link' to={item.link}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='button-container'>
          <Link className='img-link' to='#'>
            <img src='/assets/iconButton.svg' alt='iconButton' />
          </Link>
          <Button>Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
