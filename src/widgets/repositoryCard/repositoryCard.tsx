import React, {FC} from 'react'
import {RepositoryCardProps} from "widgets/repositoryCard/model/types/repository-card-types"
import cls from './repositoryCard.module.css'
import RepositoryStat from "widgets/repositoryCard/ui/repositoryStat/repositoryStat"
import HelperButton from "widgets/repositoryCard/ui/helperButton/helperButton"
import starIcon from '../..//assets/icons/repositories/star.svg'
import branchIcon from '../../assets/icons/repositories/branch.svg'
import heartIcon from '../../assets/icons/repositories/heart.svg'
import copyIcon from '../../assets/icons/repositories/copyLink.svg'
import {stringCutter} from "widgets/repositoryCard/model/helpers/stringCutter"

const RepositoryCard: FC<RepositoryCardProps> = ({full_name,forks,stargazers_count, owner}) => {
    return (
        <div className={cls.repositoryCardWrapper}>
            <div className={cls.repositoryCardHeader}>
                <img
                    className={cls.ownerAvatar}
                    src={owner.avatar_url}
                />
                <div className={cls.statSection}>
                    <RepositoryStat stat={stargazers_count} svg={starIcon} />
                    <RepositoryStat stat={forks} svg={branchIcon} />
                </div>
            </div>
            <div className={cls.repositoryCardBody}>
                <p>@{owner.login}</p>
                <a
                    className={cls.link}
                    target={'_blank'}
                    href={`https://github.com/${full_name}`}
                >
                    {stringCutter(full_name)}
                </a>
            </div>
            <div className={cls.repositoryCardFooter}>
                <div className={cls.helperButtonsBlock}>
                    <HelperButton svg={heartIcon}/>
                    <HelperButton svg={copyIcon}/>
                </div>
                <button className={cls.moreInfo}>
                    Подробнее
                </button>
            </div>
        </div>
    );
};

export default RepositoryCard;