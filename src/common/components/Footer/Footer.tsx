import React from 'react';

import { Link } from 'react-router-dom';
import { socialNetworksArray } from 'common/config';

import styles from './footer.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.text_logo} src='/assets/Group2.svg' alt='TextLogo' />
    <ul className={styles.list}>
      <Link className={styles.img_link} target='_blank' to='https://t.me/ewan9999'>
        <FaTelegramPlane style={{ marginRight: '2px' }} fontSize={20} color='#00CCA3' />
      </Link>
      <Link className={styles.img_link} target='_blank' to='https://www.instagram.com/ivan_bugajenko/'>
        <FaInstagram fontSize={20} color='#00CCA3' />
      </Link>
      <Link className={styles.img_link} target='_blank' to='https://pl.linkedin.com/in/ivan-buhaienko-b30242308'>
        <FaLinkedin fontSize={20} color='#00CCA3' />
      </Link>
    </ul>
  </footer>
);
