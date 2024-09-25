import React from 'react';

import { Link } from 'react-router-dom';
import { socialNetworksArray } from 'common/config';

import styles from './footer.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.text_logo} src='/assets/Group2.svg' alt='TextLogo' />
    <ul className={styles.list}>
      <Link className={styles.img_link} to='#'>
        <FaTelegramPlane style={{ marginRight: '2px' }} fontSize={20} color='#00CCA3' />
      </Link>
      <Link className={styles.img_link} to='#'>
        <FaInstagram fontSize={20} color='#00CCA3' />
      </Link>
    </ul>
  </footer>
);
