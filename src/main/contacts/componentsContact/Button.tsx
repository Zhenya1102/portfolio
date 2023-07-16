import React from 'react';


type ButtonProps = {
    name:string
}

export const Button = (props:ButtonProps) => {
    return <button type={'submit'}>{props.name}</button>;
};
