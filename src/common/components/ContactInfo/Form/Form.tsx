import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import Button from '../../Button';
import Input from '../../Input';
import Select from '../../Select';
import CheckBox from '../../CheckBox';
import {OptionsArray} from '../../../config';

import styles from './Form.module.css';
import {sendData} from '../../../../api';

export type FormData = {
    fullName: string;
    email: string;
    phoneNumber?: string;
    companyName?: string;
    service: string;
    additionalInfo?: string;
    nda?: boolean;
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<FormData> = async data => {
        const res = await sendData(data);
        console.log(res);
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container_inputs}>
                <div className={styles.inputs_main}>
                    <div className={styles.input_wrapper}>
                        <Input
                            label='Full Name'
                            placeholder={'Enter your name'}
                            name={'fullName'}
                            register={register}
                            rules={{
                                required: 'Field is required',
                                maxLength: {value: 100, message: 'maximum of 100 characters'},
                            }}
                            errors={errors}
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <Input
                            label={'Phone number'}
                            placeholder={'Enter your phone'}
                            name={'phoneNumber'}
                            register={register}
                            rules={{maxLength: {value: 20, message: 'maximum of 20 characters'}}}
                            errors={errors}
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <Input
                            label={'Email'}
                            placeholder={'Enter your email'}
                            name={'email'}
                            register={register}
                            rules={{
                                required: 'Field is required',
                                maxLength: {value: 254, message: 'maximum of 254 characters'},
                            }}
                            errors={errors}
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <Input
                            label={'Company name'}
                            placeholder={'Enter your company'}
                            name={'companyName'}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <Select
                            options={OptionsArray}
                            label={'Services'}
                            defaultText={'Select a service'}
                            register={register}
                            name={'service'}
                            rules={{required: 'Field is required'}}
                            errors={errors}
                        />
                    </div>
                </div>
                <Input label={'Tell us more'} name={'additionalInfo'} register={register}/>
                <div className={styles.container_controls}>
                    <CheckBox register={register} name='NDA' label='Do you need a NDA?'/>
                    <div className={styles.controls_buttons}>
                        <Button buttonType='secondary' size='xm' type='submit'>
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};
