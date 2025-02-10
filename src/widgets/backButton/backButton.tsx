import React from 'react'
import arrowLeft from "assets/icons/arrowLeft.svg"
import cls from './backButton.module.css'

const BackButton = () => {
    return (
        <a href={'/repositories'} className={cls.backButton}>
            <img style={{width: '24px', height: '24px'}} src={arrowLeft} alt=''/>
            Back
        </a>
    );
};

export default BackButton;