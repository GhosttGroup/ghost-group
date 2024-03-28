import React from 'react';

import Button from '../Button';

import styles from './Hero.module.css';

export const Hero = () => (
  <div className={styles.container}>
    <div className={styles.info}>
      <h1 className={styles.title}>The ghosts dreams are the ones worth chasing </h1>
      <div className={styles.info_button}>
        <p className={styles.content}>
          We are a team of passionate IT specialists who provide comprehensive IT outsourcing services to help you
          achieve your goals. Our innovative solutions and state-of-the-art technologies ensure that you receive the
          best possible service.
        </p>
        <Button size='xs'>Contact us</Button>
      </div>
    </div>
    <img className={styles.image} src='/assets/Group5.svg' alt='Group' />
  </div>
);
