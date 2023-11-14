import React from 'react';

import { Link } from 'react-router-dom';
import { headerArray } from '../../../config';
import Button from '../Button';

import styles from './header.module.css';

//TODO set anchors
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link className={styles.link_logo} to='#'>
            <img className={styles.img_logo} src='/assets/Group3.svg' alt='logo' />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {headerArray.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link className={styles.text_link} to={item.link}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.button_container}>
          <Link className={styles.img_link} to='#'>
            <img src='/assets/iconButton.svg' alt='iconButton' />
          </Link>
          <Button>Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
