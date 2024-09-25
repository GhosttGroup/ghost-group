import React from 'react';

import AdvantagesCard from '../AdvantagesCard';
import { advantagesArray } from 'common/config';

import styles from './OurAdvantages.module.css';

export const OurAdvantages = () => (
  <div className={styles.container} id='OurAdvantages'>
    <h1 className={styles.title}>Our Service</h1>
    <div className={styles.text_card}>
      {advantagesArray.map((item, index) => (
        <AdvantagesCard key={index} {...item} />
      ))}
    </div>
  </div>
);
