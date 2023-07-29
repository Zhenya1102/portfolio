import React from 'react';
import style from './Contacts.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import {Form} from './Form';


type ContactsPropsType = {
    id:string
}

export const Contacts = (props:ContactsPropsType) => {
    return (
        <div className={style.contacts} id={props.id}>
            <div className={style.contacts__body}>
                <BlockTitle title={'Contact'} subTitle={'Here you can contact me'}/>
                <div className={style.contacts__form}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};
