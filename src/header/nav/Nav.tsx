import React from 'react';
import style from './Nav.module.css'


export const Nav = () => {
    return (
        <nav className={style.header__nav}>
            <ul className={style.header__list}>
                <li className={style.header__link}><a href=''>Home</a></li>
                <li className={style.header__link}><a href=''>About</a></li>
                <li className={style.header__link}><a href=''>Skills</a></li>
                <li className={style.header__link}><a href=''>Project</a></li>
                <li className={style.header__link}><a href=''>Contact</a></li>
            </ul>
        </nav>
    );
};

