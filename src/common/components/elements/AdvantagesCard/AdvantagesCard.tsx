import React from 'react';

import styles from './advantagesCard.module.css';

interface IAdvantagesCardProps {
  iconSrc: string;
  title: string;
  content: string;
}

const AdvantagesCard = ({ iconSrc, title, content }: IAdvantagesCardProps) => {
  return (
    <div className={styles.text_card}>
      <img src={iconSrc} alt='icon' />
      <h3 className={styles.text_card_title}>{title}</h3>
      <p className={styles.text_card_content}>{content}</p>
    </div>
  );
};

export default AdvantagesCard;
