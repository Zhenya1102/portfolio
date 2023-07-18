import React from 'react';
import style from './BurgerMenu.module.css'

type PropsTypeBurgerMenu = {
    setOpen: () => void
    open: boolean
}
export const BurgerMenu = ({open,setOpen}: PropsTypeBurgerMenu) => {


    const onClickBurgerMenuHandler = () => {
        setOpen()
    }
    return <button
        className={`${style.burger_menu} ${open? style.menu_open : ''}`} onClick={onClickBurgerMenuHandler}>
        <span></span>
    </button>
};
