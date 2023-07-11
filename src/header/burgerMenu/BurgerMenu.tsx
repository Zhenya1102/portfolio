import React from 'react';
import style from './BurgerMenu.module.css'


export const BurgerMenu = ({open, setOpen}: any) => {


    const onClickBurgerMenuHandler = () => {
        setOpen(!open);
    }
    return <button
        className={`${style.burger_menu} ${open? style.menu_open : ''}`} onClick={onClickBurgerMenuHandler}>
        <span></span>
    </button>
};
