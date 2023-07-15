import React from 'react';
import style from './Title.module.css'

type TitleProps = {
    title:string
}

export const Title = (props:TitleProps) => {
    return (
        <h2 className={style.title}>{props.title}</h2>
    );
};
