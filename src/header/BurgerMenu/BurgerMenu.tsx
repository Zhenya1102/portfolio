import React, {useEffect, useState} from 'react';
import style from  './BurgerMenu.module.css'



export const BurgerMenu = () => {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
       if (open) {
           document.documentElement.classList.add('menu-open')
       } else {
           document.documentElement.classList.remove('menu-open')
       }
    }, [open]);

    const onClickBurgerMenuHandler = () => {
        setOpen(!open);
    }
    return <button className={style.burger_menu} onClick={onClickBurgerMenuHandler}>burger</button>
};
