import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import styles from './acc.module.css';

interface IAccProps {
    title: string;
    content: string;
}
const Acc = ({ title, content }: IAccProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordion_item}>
            <div className={styles.accordion_title} onClick={() => setIsActive(!isActive)}>
                 <FaPlus />
                <p>{title}</p>
            </div>
        <div className={`${styles.lol} ${styles[isActive ? 'lol_checked' : '']}`}>
            {isActive && <div className={styles.accordion_content}>{content}</div>}
        </div>
        </div>
    );
};

export default Acc;