import React from 'react';
import style from './Text.module.css'

type TextProps = {
    text: string
}

export const Text = (props: TextProps) => {
    return (
        <div className={style.text}>
            <p>{props.text}</p>
            <ul className={style.text__list}>
                <li>Education:</li>
                <li className={style.text__education}>
                    <span>Belarusian State University:</span>
                    <span>Human Resources Management/Personnel Administration</span>
                </li>
                <li className={style.text__education}>
                    <span>Freelancer Life Style:</span>
                    <span>Frontend Development</span>
                </li>
                <li className={style.text__education}>
                    <span>IT-Incubator:</span>
                    <span>React Development</span>
                </li>
            </ul>
        </div>
    )
};
