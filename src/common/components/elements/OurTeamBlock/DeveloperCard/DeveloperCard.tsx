import React from 'react';

import './developerCard.css';

export interface IDeveloperCardProps {
  jobPosition: string;
  name: string;
  photoURL?: string;
}

export const DeveloperCard = ({ jobPosition, name, photoURL }: IDeveloperCardProps) => {
  return (
    <div className='container'>
      <div className='container_photo'>
        <img src={photoURL || './assets/Group1.svg'} alt='developer' />
      </div>
      <div className='container_description'>
        <h3>{name}</h3>
        <span>{jobPosition}</span>
      </div>
    </div>
  );
};
