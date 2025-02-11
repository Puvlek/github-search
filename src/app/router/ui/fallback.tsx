import React from 'react';
import cls from './fallback.module.css'

const Fallback = () => {
    return (
        <div className={cls.fallback}>
            Loading...
        </div>
    );
};

export default Fallback;