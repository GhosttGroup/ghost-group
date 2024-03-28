import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { headerArray } from 'common/config';

import styles from './Header.module.css';

//TODO set anchors
export const Header = () => (
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
              <ScrollLink className={styles.text_link} to={item.link} spy={true} smooth={true} offset={-100}>
                {item.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.button_container}>
        <Link className={styles.img_link} to='#'>
          <img src='/assets/iconButton.svg' alt='iconButton' />
        </Link>
        <ScrollLink to='ContactInfo' spy={true} smooth={true} offset={-40}>
          <Button size='md'>Contact us</Button>
        </ScrollLink>
      </div>
    </div>
  </header>
);
