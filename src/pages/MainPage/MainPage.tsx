import React from 'react';

import Header from '../../common/components/elements/Header';
import Hero from '../../common/components/elements/Hero';
import OurAdvantages from '../../common/components/elements/OurAdvantages';
import OurTeamBlock from '../../common/components/elements/OurTeamBlock/OurTeamBlock';
import OurService from '../../common/components/elements/OurService/OurService';
import Faq from '../../common/components/elements/Faq/Faq';
import Footer from "../../common/components/elements/Footer";

import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <OurAdvantages />
      <OurService />
      <OurTeamBlock />
      <Faq />
        <Footer />
    </div>
  );
};

export default MainPage;
