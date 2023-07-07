import React from 'react';
import style from  './Logo.module.css'

export const Logo = () => {
    return (
        <div className={style.header__logo}>
            <span>{'{FRONT}'}</span>
            <span>ZHENYA</span>
        </div>
    );
};

