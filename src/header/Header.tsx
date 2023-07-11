import React, {useState} from 'react';
import style from './Header.module.css'
import {Nav} from './nav/Nav';
import {Logo} from './logo/Logo';
import {SocialIcon} from './social-icon/SocialIcon';
import {BurgerMenu} from './burgerMenu/BurgerMenu';


export const Header = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__body}>
                    <Logo/>
                    <div className={`${style.header_main_items} ${open ? style.header_menu_open_items :  style.header_menu_close_items}`}>
                        <Nav/>
                        <SocialIcon/>
                    </div>
                    <BurgerMenu open={open} setOpen={setOpen}/>
                </div>
            </div>
        </header>
    );
};

