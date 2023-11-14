import React from 'react';

import Header from '../../common/components/elements/Header';
import OurAdvantages from '../../common/components/elements/OurAdvantages';
import OurTeamBlock from '../../common/components/elements/OurTeamBlock/OurTeamBlock';



import styles from './MainPage.module.css';

const MainPage = () => {
  return <div className={styles.container}>
    <Header />
    <OurAdvantages />
    <OurTeamBlock />
  </div>;
};

export default MainPage;
