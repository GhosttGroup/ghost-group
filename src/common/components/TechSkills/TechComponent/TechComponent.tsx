import React from 'react';

import styles from './TechComponent.module.css';

interface IContentProps {
    content: string
}

export const TechComponent = ({ content }:IContentProps) => (
    <div className={styles.container}>
        <p className={styles.content}>{content}</p>
    </div>
    );
