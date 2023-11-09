import React from 'react';

import { Link } from 'react-router-dom';
//import Button from '../Button';
import { headerArray } from '../../../config';

import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-container'>
          <a className='link-logo' href='#'>
            <img className='img-logo' src='/assets/Group3.svg' alt='logo' />
          </a>
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
          <a className='img-link' href='#'>
            <img className='icon-button' src='/assets/iconButton.svg' alt='iconButton' />
          </a>
          <button>click me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
