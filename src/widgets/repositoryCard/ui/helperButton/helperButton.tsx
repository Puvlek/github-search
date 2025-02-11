import React, {FC} from 'react'
import cls from './helperButton.module.css'

interface HelperButtonProps {
    svg: string
    onClickHandler?: () => void
}

const HelperButton: FC<HelperButtonProps> = ({svg, onClickHandler}) => {
    return (
        <button
            className={cls.helperButton}
            onClick={onClickHandler}
        >
            <img src={svg} style={{height: '16px'}} alt=''/>
        </button>
    );
};

export default HelperButton;