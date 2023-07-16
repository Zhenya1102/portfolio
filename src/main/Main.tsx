import React from 'react';
import style from './Main.module.css'
import {Home} from './home/Home';
import {About} from './about/About';
import {Skills} from './skills/Skills';
import {Project} from './project/Project';
import {Contacts} from './contacts/Contacts';


export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <Home/>
                <About/>
                <Skills/>
                <Project/>
                <Contacts/>
            </div>
        </main>
    );
};

