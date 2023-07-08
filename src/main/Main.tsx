import React from 'react';
import style from './Main.module.css'
import {Home} from './about/Home';


export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <Home/>
            </div>
        </main>
    );
};

