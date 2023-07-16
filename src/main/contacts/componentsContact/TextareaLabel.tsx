import React from 'react';
import style from '../Form.module.css';


type TextareaLabelProps = {
    htmlFor:string
    labelName:string
    id: string
    placeholder:string
}

export const TextareaLabel = (props:TextareaLabelProps) => {
    return (
        <div className={style.form__line}>
            <label htmlFor={'3'}>Message</label>
            <textarea
                id={'3'}
                // value={'Email'}
                // name={'Email'}
                required
                placeholder={'Message'}
            />
        </div>
    );
};
