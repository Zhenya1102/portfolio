import React from 'react';
import style from './Skills.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import image1 from './img/01.svg';
import image2 from './img/02.svg';
import image3 from './img/03.svg';
import image4 from './img/04.svg';
import image5 from './img/05.svg';
import image6 from './img/06.svg';
import image7 from './img/07.svg';
import image8 from './img/08.svg';
import image9 from './img/09.svg';
import image10 from './img/10.svg';
import image11 from './img/11.svg';
import image12 from './img/12.svg';

export const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.skills__body}>
                <BlockTitle title={'Skills'} subTitle={'Technologies I work with'}/>
                <ul className={style.skills__icons}>
                    <li className={style.skills__icon}><img src={image1} alt="HTML"/></li>
                    <li className={style.skills__icon}><img src={image2} alt="CSS"/></li>
                    <li className={style.skills__icon}><img src={image3} alt="JS"/></li>
                    <li className={style.skills__icon}><img src={image11} alt="TS"/></li>
                    <li className={style.skills__icon}><img src={image4} alt="REACT"/></li>
                    <li className={style.skills__icon}><img src={image5} alt="REDUX"/></li>
                    <li className={style.skills__icon}><img src={image6} alt="GITHUB"/></li>
                    <li className={style.skills__icon}><img src={image7} alt="GIT"/></li>
                    <li className={style.skills__icon}><img src={image8} alt="WEBSTORM"/></li>
                    <li className={style.skills__icon}><img src={image9} alt="FIGMA"/></li>
                    <li className={style.skills__icon}><img src={image10} alt="MATERIALUI"/></li>
                    <li className={style.skills__icon}><img src={image12} alt="BEM"/></li>
                </ul>
            </div>
        </div>
    );
};
