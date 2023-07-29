import React from 'react';
import style from './Text.module.css'
type TextProps = {
    text: string
}

export const Text = (props:TextProps) => {
    return (
        <div>
            <p className={style.text}>{props.text}</p>
            <div>Education</div>
            <div>Belarusian State University</div>
            <div>Human Resources Management/Personnel Administration</div>
            <div>Freelancer Life Style</div>
            <div>Frontend Development</div>
            <div>IT-Incubator</div>
            <div>React Development</div>
        </div>
    )
};
