import React from 'react';
import style from './Home.module.css'
import image from './image/01.jpg';

export const Home = () => {
    return (
        <div className={style.main__body}>
            <h1 className={style.main__title}>
                <span>Hi 👋,</span>
                <span>My name is</span>
                <span className={style.main__title_gradient}>Zhenya Luzhanski</span>
                <span>I am a Frontend Developer</span>
            </h1>
            <div className={style.main__photo}>
                <img src={image} alt="my photo"/>
            </div>
        </div>
    );
};
