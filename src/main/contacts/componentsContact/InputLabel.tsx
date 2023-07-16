import React from 'react';
import style from '../Form.module.css';


type InputLabelProps = {
    htmlFor: string
    labelName: string
    type: string
    placeholder: string
    id: string
    // value: string
    //name: string
}

export const InputLabel = (props:InputLabelProps) => {
    return (
        <div className={style.form__line}>
            <label htmlFor={props.htmlFor}>{props.labelName}</label>
            <input
                type={props.type}
                id={props.id}
                autoComplete='on'
                // value={'Name'}
                // name={'Name'}
                required
                placeholder={props.placeholder}
            />
        </div>
    );
};
