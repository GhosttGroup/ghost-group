import React from 'react';
import styles from "../styles/W1920.module.css";
import Component1 from '../assets/Component1.svg';
import Group1 from '../assets/Group1.svg';
import Group2 from '../assets/Group2.svg';
import iconButton from '../assets/iconButton.svg';

const W1920: React.FC = () => {
    return (
        <div className={styles.W1920}>
            <div className={styles.header}>
                <div className={styles.frame3}>
                    <div className={styles.group3}>
                        <img className={styles.group1} src={Group1} alt={"Logo"}/>
                        <img className={styles.group2} src={Group2} alt={"Logo"}/>
                    </div>
                    <div className={styles.frame1}>
                        <div className={styles.frame4}>
                            <div className={styles.ourServices}>Our services</div>
                        </div>
                        <div className={styles.frame5}>
                            <div className={styles.techStack}>Tech Stack</div>
                        </div>
                        <div className={styles.aboutUs}>About us</div>
                    </div>
                    <div className={styles.frame2}>
                        <img className={styles.iconButton} src={iconButton}/>
                        <div className={styles.headerBt1}>
                            <div className={styles.headerBt1text}>
                                Contact us
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img className={styles.component1} src={Component1} alt="Component1"/>
        </div>

    );
};
export default W1920;
