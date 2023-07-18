import React from 'react';
import style from './About.module.css'
import {Text} from '../componets/Text';
import {BlockTitle} from '../componets/BlockTitle';


type AboutPropsType = {
    id:string
}

export const About = (props:AboutPropsType) => {
    return (
        <div className={style.about} id={props.id}>
            <div className={style.about__body}>
                <BlockTitle title={'About'} subTitle={'My professional activity'}/>
                <Text text={'The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS. Meet my family. There are five of us – my parents, my elder brother, my baby sister and me. First, meet my mum and dad, Jane and Michael.'}/>
            </div>
        </div>
    );
};
