import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import Button from '../Button';

import styles from './Hero.module.css';

export const Hero = () => (
  <div className={styles.container}>
    <div className={styles.info}>
      <h1 className={styles.title}>Behind every ghostly dream awaits a real aim</h1>
      <div className={styles.info_button}>
        <p className={styles.content}>
          We are a team of passionate IT specialists who provide comprehensive IT outsourcing services to help you
          achieve your goals. Our innovative solutions and state-of-the-art technologies ensure that you receive the
          best possible service.
        </p>
        <ScrollLink to='ContactInfo' spy={true} smooth={true} offset={-40}>
          <Button size='xs'>Contact us</Button>
        </ScrollLink>
      </div>
    </div>
    <img className={styles.image} src='/assets/Group5.svg' alt='Group' />
  </div>
);
