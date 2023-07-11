import React from 'react';
import style from './About.module.css'



export const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.about__title}>About Me</h2>
            <p className={style.about__text}></p>
        </div>
    );
};
