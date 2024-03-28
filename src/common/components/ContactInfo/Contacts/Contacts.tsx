import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Contacts.module.css';

interface IContactsProps {
  iconSrc: string;
  altInfo: string;
  info: string;
  link: string;
}
export const Contacts = (props: IContactsProps) => (
  <div className={styles.container}>
    <img className={styles.container_img} src={props.iconSrc} alt={props.altInfo} />
    <li className={styles.container_info}>
      <Link to={props.link}>{props.info}</Link>
    </li>
  </div>
);
