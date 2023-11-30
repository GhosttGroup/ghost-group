import React from 'react';

import Accordion from './Accordion';
import { accordionData } from '../../../config';

import styles from './faq.module.css';

const Faq = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Faq</h2>
      <div className={styles.accordion}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
