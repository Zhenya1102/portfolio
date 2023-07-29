import React from 'react';
import style from './About.module.css'
import {Text} from '../componets/Text';
import {BlockTitle} from '../componets/BlockTitle';
import image from './img/01.jpg'

type AboutPropsType = {
    id: string
}

export const About = (props: AboutPropsType) => {
    return (
        <div className={style.about} id={props.id}>
            <div className={style.about__body}>
                <BlockTitle title={'About'} subTitle={'My professional activity'}/>
                <div className={style.about__content}>
                    <div className={style.about__photo}>
                        <img src={image} alt="My Photo"/>
                    </div>
                    <Text
                        text={'I\'m frontend developer with experience in creating SPA using React, Redux, redux-Toolkit, Axios, React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. I am enthusiastic team player focused on personal growth. Now I am improving my skills in this direction and expanding them with new technologies.'}/>
                </div>
            </div>
        </div>
    );
};
