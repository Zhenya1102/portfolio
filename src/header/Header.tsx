import React from 'react';
import style from './Header.module.css'
import {Nav} from './nav/Nav';
import {Logo} from './logo/Logo';
import {SocialIcon} from './social-icon/SocialIcon';
import {BurgerMenu} from './BurgerMenu/BurgerMenu';


export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__body}>
                    <Logo/>
                    <div className={style.header__items}>
                        <Nav/>
                        <SocialIcon/>
                    </div>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    );
};

