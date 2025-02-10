import React, {useEffect} from 'react';
import BackButton from "widgets/backButton/backButton";
import cls from './profile.module.css'
import {observer} from "mobx-react-lite";
import ProfileStore from "entities/profileStore/profileStore";
import {InfoCardsProps} from "pages/profile/module/constants/infoCardsProps";
import InfoCard from "pages/profile/ui/infoCard/infoCard";
import heartIcon from 'assets/icons/repositories/heart.svg'
import copyLinkIcon from 'assets/icons/repositories/copyLink.svg'
import FavoritesStore from "entities/favoritesStore/favoritesStore";
import redHeartIcon from "assets/icons/repositories/redHeart.svg";
import {navigate} from "shared/navigate/navigate";
import {AppRoutes} from "app/router/model/constants/appRoutes";

const Profile = observer(() => {

    const {repository, setProfileRepository} = ProfileStore
    const {repositories, setRepository, deleteRepository} = FavoritesStore

    useEffect(() => {
        return () => {
            setProfileRepository(null)
        }
    }, []);

    const addOrDeleteInFavorite = () => {
        if (!repositories.some(favoriteRepository => favoriteRepository.id === repository.id)) {
            setRepository(repository)
        } else {
            deleteRepository(repository)
        }
    }

    if (!repository) {
        navigate(AppRoutes.repositories.path)
        return (
            <></>
        )
    }

    return (
        <>
            <BackButton/>
            <div className={cls.profileWrapper}>
                <div>
                    <h2 className={cls.title}>Профиль</h2>
                </div>
                <div className={cls.repositoryMainInfo}>
                    <img className={cls.avatar} src={repository?.owner?.avatar_url} alt=""/>
                    <div className={cls.nameAndDescriptionBlock}>
                        <p className={cls.fullName}>{repository?.full_name}</p>
                        <p className={cls.description}>{repository?.description}</p>
                    </div>
                </div>
                <div className={cls.cardBlock}>
                    {InfoCardsProps(repository)?.map((props) => (
                        <InfoCard key={props.title} {...props} />
                    ))}
                </div>
                <hr style={{border: '1px #f3f3f3 solid'}}/>
                <div className={cls.profileFooter}>
                    <div className={cls.helpersButtonBlock}>
                        <button
                            onClick={addOrDeleteInFavorite}
                            className={cls.helperButton}
                        >

                            <img
                                src={repositories.some(favoriteRepository => favoriteRepository.id === repository.id) ?
                                    redHeartIcon :
                                    heartIcon}
                                alt=""
                            />
                        </button>
                        <button className={cls.helperButton}>
                            <img src={copyLinkIcon} alt=""/>
                        </button>
                    </div>
                    <a
                        target={'_blank'}
                        href={`https://github.com/${repository.full_name}`}
                        className={cls.openRepositoryButton}
                    >
                        Открыть репозиторий
                    </a>
                </div>
            </div>
        </>
    )

});

export default Profile;