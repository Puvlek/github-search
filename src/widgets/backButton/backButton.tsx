import React from 'react'
import arrowLeft from "assets/icons/arrowLeft.svg"
import cls from './backButton.module.css'
import {navigate} from "shared/helpers/navigate/navigate";
import {AppRoutes} from "app/router/model/constants/appRoutes";

const BackButton = () => {
    return (
        <button onClick={() => navigate(AppRoutes.repositories.path)} className={cls.backButton}>
            <img style={{width: '24px', height: '24px'}} src={arrowLeft} alt=''/>
            Back
        </button>
    );
};

export default BackButton;