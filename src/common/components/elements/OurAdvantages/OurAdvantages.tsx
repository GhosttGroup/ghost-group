import React from 'react';

import { advantagesArray } from '../../../config';
import AdvantagesCard from '../AdvantagesCard';

import styles from './ourAdvantages.module.css';

const OurAdvantages = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Advantages</h1>
      <div className={styles.text_card}>
        {advantagesArray.map((item, index) => (
          <AdvantagesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurAdvantages;
