import React from 'react';
import style from './Text.module.css'
type TextProps = {
    text: string
}

export const Text = (props:TextProps) => {
    return <p className={style.text}>{props.text}</p>;
};
