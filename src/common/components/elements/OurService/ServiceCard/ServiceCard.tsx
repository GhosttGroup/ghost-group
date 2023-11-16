import React from 'react';

import styles from './serviceCard.module.css';

interface IServiceCardProps {
  iconSrc: string;
  title: string;
  content: string;
}
const ServiceCard = ({ iconSrc, title, content }: IServiceCardProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={iconSrc} alt='computer' />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
export default ServiceCard;
