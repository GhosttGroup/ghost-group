import React from 'react';
import Contacts from './Contacts';
import Form from './Form';
import { ContactsArray } from '../../config';

import styles from './ContactInfo.module.css';
export const ContactInfo = () => (
  <div className={styles.container}>
    <div className={styles.container_wrapper}>
      <div className={styles.container_title}>
      <h3>Contact Information</h3>
        <p className={styles.container_title_text}>Say something to start a live chat!</p>
      </div>
    <ul className={styles.container_list}>
      {ContactsArray.map((item, index) => (
        <Contacts key={index} {...item} />
      ))}
    </ul>
    </div>
    <Form />
  </div>
);

