import React from 'react';

import TechComponent from './TechComponent';
import { techComponentArray } from 'common/config';

import styles from './TechSkills.module.css';

export const TechSkills = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Tech Stack</h2>
    <p className={styles.description}>
      Feel IT`s tech stack includes Node.js, Angular, React Native, Vue.js, and JavaScript.
      <br />
      With these cutting-edge and secure technologies, we match clients with specific experts and swiftly assemble
      customized teams to meet their needs and preferences.
    </p>
    <div className={styles.container_item}>
      {techComponentArray.map((item, index) => (
        <TechComponent key={index} content={item.title} />
      ))}
    </div>
  </div>
);
