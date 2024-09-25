import React from 'react';

import Contacts from './Contacts';
import Form from './Form';
import { contactsArray } from '../../config';

import styles from './ContactInfo.module.css';

export const ContactInfo = () => (
  <div id='ContactInfo' className={styles.container}>
    <div className={styles.container_contact}>
      <div className={styles.container_contact_block}>
        <div className={styles.container_contact_title}>
          <img className={styles.img_logo} src='/assets/Group2.svg' alt='logo' />
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
        </div>
      </div>
      <div className={styles.container_contact_info}>
        {contactsArray.map((item, index) => (
          <Contacts key={index} {...item} />
        ))}
      </div>
    </div>
    <Form />
  </div>
);
