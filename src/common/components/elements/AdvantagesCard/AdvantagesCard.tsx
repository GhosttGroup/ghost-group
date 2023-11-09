import React from 'react';

import './advantagescard.css';

interface IAdvantagesCardProps {
  iconSrc: string;
  title: string;
  content: string;
}

const AdvantagesCard = ({ iconSrc, title, content }: IAdvantagesCardProps) => {
  return (
    <div className='text-card'>
      <img src={iconSrc} alt='icon' />
      <h3 className='text-card_title'>{title}</h3>
      <p className='text-card_content'>{content}</p>
    </div>
  );
};

export default AdvantagesCard;
