import React from 'react';

import style from './developerCard.module.css';

interface IDeveloperCardProps {
  jobPosition: string;
  name: string;
  photoURL?: string;
}

export const DeveloperCard = ({ jobPosition, name, photoURL }: IDeveloperCardProps) => {
  return (
    <div className={style.container}>
      <div className={style.container_photo}>
        <img src={photoURL || './assets/Group1.svg'} alt='developer' />
      </div>
      <div className={style.container_description}>
        <h3>{name}</h3>
        <span>{jobPosition}</span>
      </div>
    </div>
  );
};
