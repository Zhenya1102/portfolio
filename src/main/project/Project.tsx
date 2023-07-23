import React from 'react';
import style from './Project.module.css'
import {BlockTitle} from '../componets/BlockTitle';
import {Card} from '../componets/Card';
import image1 from './img/01.jpg';
import image2 from './img/02.jpg';
import image3 from './img/03.jpg';
import image4 from './img/04.jpg';
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
                    info={'Tech stack : HTML, SCC-Modules, React, Redux'}
                    href={'https://zhenya1102.github.io/counter/'}
                    hrefCode={'https://github.com/Zhenya1102/counter'}
                />
                <Card
                    title={'Project Tile goes here'}
                    img={image2}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    info={'Tech stack : HTML , JavaScript, SASS, React'}
                    href={''}
                    hrefCode={''}
                />
                <Card
                    title={'Project Tile goes here'}
                    img={image3}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    info={'Tech stack : HTML , JavaScript, SASS, React'}
                    href={''}
                    hrefCode={''}
                />
                <Card
                    title={'Project Tile goes here'}
                    img={image4}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    info={'Tech stack : HTML , JavaScript, SASS, React'}
                    href={''}
                    hrefCode={''}
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
