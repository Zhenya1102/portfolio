import React from 'react';
import style from './Main.module.css'
import {Home} from './home/Home';
import {About} from './about/About';


export const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <Home/>
                {/*<About/>*/}
            </div>
        </main>
    );
};

