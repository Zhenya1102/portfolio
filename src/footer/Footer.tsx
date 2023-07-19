import React from 'react';
import style from './Footer.module.css'
import image1 from '../header/social-icon/icons/01.svg';
import image2 from '../header/social-icon/icons/02.svg';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__body}>
                    <div className={style.footer__logo}>
                        <span>{'{FRONT}'}</span>
                        <span>ZHENYA</span>
                    </div>
                    <div className={style.footer__contacts}>
                        <ul className={style.footer__list}>
                            <li><a href="tel:+375336314511">+375 33 6314511</a></li>
                            <li><a href="mailto:luzhanskizhenya@gmail.com">luzhanskizhenya@gmail.com</a></li>
                        </ul>
                        <div className={style.footer__icons}>
                            <a className={style.footer__icon} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/zhenya-luzhanski-1b4453244/"><img src={image1} alt="icon"/></a>
                            <a className={style.footer__icon} rel="noopener noreferrer" target="_blank" href="https://github.com/Zhenya1102"><img src={image2} alt="icon"/></a>
                        </div>
                    </div>
                </div>
                <div className={style.footer__label}>Developed by Zhenya Luzhanski in 2023</div>
            </div>
        </footer>
    );
};
