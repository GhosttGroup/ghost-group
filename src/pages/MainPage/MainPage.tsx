import React from 'react';

import { Faq, Header, Hero, OurAdvantages, OurService, OurTeamBlock, TechStack } from 'common/components';

import styles from './MainPage.module.css';

export const MainPage = () => (
    <div className={styles.container}>
      <Header />
      <Hero />
      <OurAdvantages />
      <OurService />
      <TechStack />
      <OurTeamBlock />
      <Faq />
    </div>
  );
