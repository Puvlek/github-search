import React, {FC} from 'react'
import cls from './repositoryStat.module.css'

interface RepositoryStatProps {
    svg: string,
    stat: number
}

const RepositoryStat: FC<RepositoryStatProps> = ({svg, stat}) => {
    return (
        <div className={cls.repositoryStatWrapper}>
            <img src={svg}/>
            {stat}
        </div>
    );
};

export default RepositoryStat;