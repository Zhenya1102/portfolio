import React from 'react';
import style from  './SocialIcon.module.css'
import image1 from './icons/01.svg';
import image2 from './icons/02.svg';

export const SocialIcon = () => {
    return (
        <div className={style.header__icons}>
            <a className={style.header__icon} rel="noopener noreferrer" target="_blank" href="#"><img src={image1} alt="icon"/></a>
            <a className={style.header__icon} rel="noopener noreferrer" target="_blank" href="#"><img src={image2} alt="icon"/></a>
        </div>
    );
};

