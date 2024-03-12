import React from 'react';

import {
  Faq,
  Footer,
  Header,
  Hero,
  OurAdvantages,
  OurService,
  OurTeamBlock,
  TechSkills,
  ContactInfo,
} from '../../common/components';

import styles from './MainPage.module.css';

const MainPage = () => (
  <div className={styles.container}>
    <Header />
    <Hero />
    <OurAdvantages />
    <OurService />
    <TechSkills />
    <OurTeamBlock />
    <Faq />
    <ContactInfo />
    <Footer />
  </div>
);

export default MainPage;
