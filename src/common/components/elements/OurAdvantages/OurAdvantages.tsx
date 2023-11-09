import React from 'react';

import { advantagesArray } from '../../../config';
import AdvantagesCard from '../AdvantagesCard';

import './ouradvantages.css';

const OurAdvantages = () => {
  return (
    <div className='container'>
      <h1 className='title'>Our Advantages</h1>
      <div className='text-cards'>
        {advantagesArray.map((item, index) => (
          <AdvantagesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurAdvantages;
