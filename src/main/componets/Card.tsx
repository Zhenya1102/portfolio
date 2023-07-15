import React from 'react';
import style from './Card.module.css'
import icon1 from '../project/icon/01.svg';
import icon2 from '../project/icon/02.svg';


type CardProps = {
    title: string
    img: string
    text: string
    info: string
}


export const Card = (props: CardProps) => {
    return (
        <article className={style.card}>
            <a className={style.card__image} href="#" rel="noopener noreferrer" target="_blank">
                <img src={props.img} alt="image"/>
            </a>
            <div className={style.card__items}>
                <div className={style.card__title}>{props.title}</div>
                <p className={style.card__text}>{props.text}</p>
                <div className={style.card__info}>{props.info}</div>
                <div className={style.card__links}>
                    <a className={style.card__link} href="#" rel="noopener noreferrer" target="_blank">
                        <img src={icon1} alt="icon"/>
                        <div className={style.card__label}>Live Preview</div>
                    </a>
                    <a className={style.card__link} href="#" rel="noopener noreferrer" target="_blank">
                        <img src={icon2} alt="icon"/>
                        <div className={style.card__label}>View Code</div>
                    </a>
                </div>
            </div>
        </article>
    );
};
