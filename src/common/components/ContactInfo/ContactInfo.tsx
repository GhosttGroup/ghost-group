import React from 'react';
import Contacts from './Contacts';
import Form from './Form';
import { ContactsArray } from '../../config';

import styles from './ContactInfo.module.css';
export const ContactInfo = () => (
  <div id='ContactInfo' className={styles.container}>
    <div className={styles.container_wrapper}>
      <div className={styles.contact_info}>
        <div className={styles.contact_info_wrapper}>
          <div className={styles.contact_info_main}>
            <div className={styles.contact_info_title}>
              <img className={styles.contact_info_img} src='/assets/Group1.svg' alt='asdasd' />
              <div className={styles.contact_info_texts}>
                <h3>Contact Information</h3>
                <p className={styles.contact_info_text}>Say something to start a live chat!</p>
              </div>
            </div>
            <ul className={styles.contact_info_list}>
              {ContactsArray.map((item, index) => (
                <Contacts key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Form />
    </div>
  </div>
);
