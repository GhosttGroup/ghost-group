import React from 'react';

import styles from './ServiceCard.module.css';

interface IServiceCardProps {
  iconSrc: string;
  title: string;
  content: string;
}

export const ServiceCard = ({ iconSrc, title, content }: IServiceCardProps) => (
    <div className={styles.container}>
      <img className={styles.image} src={iconSrc} alt='computer' />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
