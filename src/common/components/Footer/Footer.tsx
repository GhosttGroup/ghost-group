import React from 'react';

import { Link } from 'react-router-dom';
import { socialNetworksArray } from '../../config';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.text_logo} src='/assets/Group3.svg' alt='TextLogo' />
    <img className={styles.logo} src='/assets/Group1.svg' alt='Logo' />
    <ul className={styles.list}>
      {socialNetworksArray.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>
            <img className={styles.img} src={item.icon} alt='SocialNetwork' />
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);
