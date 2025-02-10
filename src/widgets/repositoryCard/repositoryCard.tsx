import React, {FC} from 'react'
import cls from './repositoryCard.module.css'
import RepositoryStat from "widgets/repositoryCard/ui/repositoryStat/repositoryStat"
import HelperButton from "widgets/repositoryCard/ui/helperButton/helperButton"
import starIcon from '../..//assets/icons/repositories/star.svg'
import branchIcon from '../../assets/icons/repositories/branch.svg'
import heartIcon from '../../assets/icons/repositories/heart.svg'
import redHeartIcon from '../../assets/icons/repositories/redHeart.svg'
import copyIcon from '../../assets/icons/repositories/copyLink.svg'
import {stringCutter} from "widgets/repositoryCard/model/helpers/stringCutter"
import {Repository} from "entities/appPathStore/types/repository-types"
import FavoritesStore from "entities/favoritesStore/favoritesStore"
import {observer} from "mobx-react-lite"

const RepositoryCard: FC<Repository> = observer((props) => {

    const {repositories, setRepository, deleteRepository} = FavoritesStore

    const addOrDeleteInFavorite = () => {
        if (!repositories.some(repository => repository.id === props.id)) {
            setRepository(props)
        } else {
            deleteRepository(props)
        }
    }

    return (
        <div className={cls.repositoryCardWrapper}>
            <div className={cls.repositoryCardHeader}>
                <img
                    className={cls.ownerAvatar}
                    src={props.owner.avatar_url}
                    alt=''
                />
                <div className={cls.statSection}>
                    <RepositoryStat stat={props.stargazers_count} svg={starIcon} />
                    <RepositoryStat stat={props.forks} svg={branchIcon} />
                </div>
            </div>
            <div className={cls.repositoryCardBody}>
                <p>@{props.owner.login}</p>
                <a
                    className={cls.link}
                    target={'_blank'}
                    href={`https://github.com/${props.full_name}`}
                >
                    {stringCutter(props.full_name)}
                </a>
            </div>
            <div className={cls.repositoryCardFooter}>
                <div className={cls.helperButtonsBlock}>
                    <HelperButton
                        onClickHandler={addOrDeleteInFavorite}
                        svg={repositories.some(repository => repository.id === props.id) ? redHeartIcon : heartIcon }
                    />
                    <HelperButton svg={copyIcon}/>
                </div>
                <a href={'/profile'} className={cls.moreInfo}>
                    Подробнее
                </a>
            </div>
        </div>
    )
})

export default RepositoryCard;