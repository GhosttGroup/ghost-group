import React, { useState } from 'react';

import { FaPlus } from 'react-icons/fa6';

import styles from './accordion.module.css';

interface IAccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.title} ${styles[isActive ? 'title_color' : '']}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.icon}>
          <FaPlus className={styles[isActive ? 'rotate' : '']} />
        </div>
        <div>{title}</div>
      </div>
      <div className={`${styles.content} ${styles[isActive ? 'content_checked' : '']}`}>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Accordion;
