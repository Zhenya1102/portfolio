import React from 'react';
import style from './SubTitle.module.css'


type SubTitleProps = {
    subTitle:string
}
export const SubTitle = (props:SubTitleProps) => {
    return <h3 className={style.subtitle}>{props.subTitle}</h3>
};
