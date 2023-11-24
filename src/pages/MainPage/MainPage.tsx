import React from 'react';

import Header from '../../common/components/elements/Header';
import Hero from '../../common/components/elements/Hero';
import OurAdvantages from '../../common/components/elements/OurAdvantages';
import OurTeamBlock from '../../common/components/elements/OurTeamBlock/OurTeamBlock';
import OurService from '../../common/components/elements/OurService/OurService';
import styles from './MainPage.module.css';
import Accordion from "../../common/components/elements/Accordion/Accordion";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <Accordion/>
    </div>
  );
};

export default MainPage;
