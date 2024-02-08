import React from 'react';

import Accordion from './Accordion';
import { accordionData } from 'common/config';

import styles from './faq.module.css';

export const Faq = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Faq</h2>
    <div className={styles.accordion}>
      {accordionData.map(({ title, content }, index) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </div>
  </div>
);
