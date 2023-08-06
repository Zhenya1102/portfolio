import React from 'react';
import style from './Project.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import {Card} from '../componets/Card';
import image1 from './img/counter.jpeg';
import image2 from './img/landing_anna.jpg';
import image3 from './img/landing_taon.jpg';
import image4 from './img/clock.jpg';
import image5 from './img/05.jpg';
import image6 from './img/06.jpg';

type ProjectPropsType = {
    id:string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={style.project} id={props.id}>
            <div className={style.project__body}>
                <BlockTitle title={'Projects'} subTitle={'Things I’ve built so far'}/>
            <div className={style.project__cards}>
                <Card
                    title={'Counter'}
                    img={image1}
                    text={'A small project of the counter on the React library, data is written to localStorage, two versions of the counter are made: 1. React / Redux bundle is connected,\n' +
                        '2. the counter is made using the useState hook'}
                    info={'Tech stack : HTML, CSS.Modules, React, Redux'}
                    href={'https://zhenya1102.github.io/counter/'}
                    hrefCode={'https://github.com/Zhenya1102/counter'}
                />
                <Card
                    title={'Concept Landing'}
                    img={image2}
                    text={'Adaptive layout of a conceptual website for Anna-Volkova, a Gestalt coach and psychologist. Full-screen start block, small animation, pop-up, etc.'}
                    info={'Tech stack : HTML5, CSS3/SCSS, JS, BEM, FIGMA, WEBPACK, GULP'}
                    href={'https://zhenya1102.github.io/Anna-Volkova/'}
                    hrefCode={'https://github.com/Zhenya1102/Anna-Volkova'}
                />
                <Card
                    title={'Clock'}
                    img={image4}
                    text={'A small clock project in the React library, React hooks applied: useState, useEffect. CSS modules and styled components approaches are used.'}
                    info={'HTML, CSS-Modules, Styled-Components, TypeScript, React'}
                    href={'https://zhenya1102.github.io/clock/'}
                    hrefCode={'https://github.com/Zhenya1102/clock'}
                />
                <Card
                    title={'Concept Landing TAON'}
                    img={image3}
                    text={'Adaptive layout concept site of the Belarusian company "TAON". Implementation: Fullscreen start block, Spollers, Slider-Swiper, etc.'}
                    info={'Tech stack : HTML5, CSS3/SCSS, JS, BEM, FIGMA, WEBPACK, GULP.'}
                    href={'https://zhenya1102.github.io/TAON/'}
                    hrefCode={'https://github.com/Zhenya1102/TAON'}
                />
                <Card
                    title={'Project Tile goes here'}
                    img={image5}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    info={'Tech stack : HTML , JavaScript, SASS, React'}
                    href={''}
                    hrefCode={''}
                />
                <Card
                    title={'Project Tile goes here'}
                    img={image6}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    info={'Tech stack : HTML , JavaScript, SASS, React'}
                    href={''}
                    hrefCode={''}
                />
            </div>
            </div>
        </div>
    );
};
