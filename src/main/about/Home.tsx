import React, {useState} from 'react';
import style from './Home.module.css'
import image from './image/01.jpg';




export const Home = () => {
    // const [position, setPosition] = useState<{x:number, y:number}>({ x: 0, y: 0 });
    //
    // const handleMouseMove = (event:React.MouseEvent<HTMLDivElement>) => {
    //     setPosition({ x: event.clientX, y: event.clientY });
    // };
    return (
        <div className={style.main__body}>
            <h1 className={style.main__title}>
                <span>Hi <span className={style.main__title_smiley}>&#x1F44B;</span>,</span>
                <span>My name is</span>
                <span className={style.main__title_gradient}>Zhenya Luzhanski</span>
                <span>I am a Frontend Developer</span>
            </h1>
            {/*<div onMouseMove={handleMouseMove} className={style.main__photo} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>*/}
            {/*    <img src={image} alt="my photo"/>*/}
            {/*</div>*/}
            <div className={style.main__photo}>
                <img src={image} alt="my photo"/>
            </div>
        </div>
    );
};
