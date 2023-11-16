import React from 'react';

import { companyMembers } from '../../../config';
import DeveloperCard from './DeveloperCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './ourTeamBlock.css';

const OurTeamBlock = () => {
  return (
    <div className='our-team-container'>
      <h2 className='title'>Our Team</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          468: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        }}
        pagination={{ clickable: true }}
      >
        {companyMembers.map((item, index) => (
          <SwiperSlide key={index}>
            <DeveloperCard jobPosition={item.jobPosition} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeamBlock;
