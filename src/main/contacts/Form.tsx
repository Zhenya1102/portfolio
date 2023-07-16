import React from 'react';
import style from './Form.module.css'
import {InputLabel} from './componentsContact/InputLabel';
import {TextareaLabel} from './componentsContact/TextareaLabel';
import {Button} from './componentsContact/Button';


export const Form = () => {
    return (
        <form className={style.form} action={'#'} method={'get'} encType={'#'}>
            <div className={style.form__lines}>
                <InputLabel
                    type={'text'}
                    labelName={'Name'}
                    htmlFor={'1'}
                    id={'1'}
                    placeholder={'Name'}
                />
                <InputLabel
                    type={'Email'}
                    labelName={'Email'}
                    htmlFor={'2'}
                    id={'2'}
                    placeholder={'Email'}
                />
                <TextareaLabel
                    htmlFor={'3'}
                    labelName={'Message'}
                    id={'3'}
                    placeholder={'Message'}
                />
            </div>
            <Button name={'Submit'}/>
        </form>
    );
};
