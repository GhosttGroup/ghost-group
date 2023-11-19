import React from 'react';

import Header from '../../common/components/elements/Header';
import Hero from '../../common/components/elements/Hero';
import OurAdvantages from '../../common/components/elements/OurAdvantages';
import OurTeamBlock from '../../common/components/elements/OurTeamBlock/OurTeamBlock';
import OurService from '../../common/components/elements/OurService/OurService';

import styles from './MainPage.module.css';
import TechStack from "../../common/components/elements/TechStack/TechStack";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <OurAdvantages />
      <OurService />
        <TechStack />
      <OurTeamBlock />

    </div>
  );
};

export default MainPage;
