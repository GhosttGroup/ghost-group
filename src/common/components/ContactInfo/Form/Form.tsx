import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../../Button';
import Input from '../../Input';
import Select from '../../Select';
import CheckBox from '../../CheckBox';
import { OptionsArray } from '../../../config';

import styles from './Form.module.css';

export const Form = () => (

    <form className={styles.container}>
      <div className={styles.container_inputs}>
      <Input label={'Full Name'} required={true} placeholder={'Enter your name'} />
      <Input label={'Email'} required={true} placeholder={'Enter your email'}/>
      <Input label={'Phone number'} placeholder={'Enter your phone'}/>
      <Input label={'Company name'} placeholder={'Enter your company'}/>
      </div>
      <Select options={OptionsArray}/>
    </form>

  );
