import React from 'react';
import style from './Nav.module.css'


type NavPropsType = {
    setOpen: () => void
}

export const Nav = (props:NavPropsType) => {
    const handleNavClick = (id:string) => {
        const element = document.getElementById(id);
        props.setOpen()
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }
    return (
        <nav className={style.header__nav}>
            <ul className={style.header__list}>
                <li className={style.header__link} onClick={() => handleNavClick('home')}><a >Home</a></li>
                <li className={style.header__link} onClick={() => handleNavClick('about')}><a>About</a></li>
                <li className={style.header__link} onClick={() => handleNavClick('skills')}><a>Skills</a></li>
                <li className={style.header__link} onClick={() => handleNavClick('project')}><a>Project</a></li>
                <li className={style.header__link} onClick={() => handleNavClick('contacts')}><a>Contact</a></li>
            </ul>
        </nav>
    );
};