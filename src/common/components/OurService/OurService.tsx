import React from 'react';

import Button from '../Button';
import { serviceCardArray } from 'common/config';
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './OurService.module.css';
import { Link as ScrollLink } from 'react-scroll/modules';

export const OurService = () => (
  <div id='OurService' className={styles.container}>
    <div className={styles.info}>
      <h2 className={styles.title}>Our Advantages</h2>
      <p className={styles.content}>
        Unlock top-tier IT talent effortlessly. Seeking a senior engineer or mid-level developer? Partner with Feel IT
        Studio to scale your team with precision. We manage HR, legal, and tax intricacies, enabling you to concentrate
        on your core business objectives. Whether you need a mobile developer or a Machine Learning engineer,
        we&#8217;re aligned with your needs.
      </p>
      <ScrollLink to='ContactInfo' spy={true} smooth={true} offset={-40}>
        <Button size='xs'>Contact us</Button>
      </ScrollLink>
    </div>
    <div className={styles.container_swiper}>
      <Swiper
        breakpoints={{
          1000: {
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
        <div className={styles.cards}>
          {serviceCardArray.map((item, index) => (
            <SwiperSlide key={index}>
              <ServiceCard key={index} {...item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  </div>
);
