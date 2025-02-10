import React, {FC} from 'react'
import cls from './helperButton.module.css'

interface HelperButtonProps {
    svg: string
}

const HelperButton: FC<HelperButtonProps> = ({svg}) => {
    return (
        <button className={cls.helperButton}>
            <img src={svg} style={{height: '16px'}} />
        </button>
    );
};

export default HelperButton;