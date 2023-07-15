import React from 'react';
import {Title} from './Title';
import {SubTitle} from './SubTitle';
import style from './BlockTitle.module.css'

type BlockTitleProps = {
    title:string
    subTitle:string
}

export const BlockTitle = (props:BlockTitleProps) => {
    return (
        <div className={style.block_titles}>
            <Title
                title={props.title}
            />
            <SubTitle
                subTitle={props.subTitle}
            />
        </div>
    );
};
