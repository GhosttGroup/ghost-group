import React from 'react';

import { DeveloperCardType } from 'common/types/DeveloperCardType';

import style from './DeveloperCard.module.css';

export const DeveloperCard = ({ jobPosition, name, photoURL }: DeveloperCardType) => (
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
