import React from 'react';
import style from '../Form.module.css';

type ButtonProps = {
    name:string
}

export const Button = (props:ButtonProps) => {
    return <button className={style.form__button} type={'submit'}>{props.name}</button>;
};
