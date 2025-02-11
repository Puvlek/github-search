import React, {FC} from 'react';
import {InfoCardProps} from "pages/profile/module/types/info-card-props";
import cls from './infoCard.module.css'

const InfoCard: FC<InfoCardProps> = ({title, svg, value}) => {

    let subValue
    if (typeof value === 'boolean') {
        switch (value) {
            case true:
                subValue = 'Да'
                break
            case false:
                subValue = 'Нет'
        }
    }

    if (title === 'Создано' || title === 'Изменено') {
        subValue = value as string
        const pattern = /-/g;
        subValue = subValue
            .split('T')[0]
            .replace(pattern, '.')
    }

    return (
        <div className={cls.infoCardWrapper}>
            <div className={cls.iconWrapper}>
                <img className={cls.icon} src={svg} alt=""/>
            </div>

            <div>
                <p className={cls.value}>{subValue ? subValue : value}</p>
                <p className={cls.title}>{title}</p>
            </div>
        </div>
    );
};

export default InfoCard