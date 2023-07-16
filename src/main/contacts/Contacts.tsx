import React from 'react';
import style from './Contacts.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import {Form} from './Form';




export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.contacts__body}>
                <BlockTitle title={'Contact'} subTitle={'Here you can find all my contacts'}/>
                <div className={style.contacts__form}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};
