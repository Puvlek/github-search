import React from 'react';
import cls from './header.module.css'
import searchIcon from 'assets/icons/header/search.svg'
import heartIcon from 'assets/icons/header/heart.svg'
import profileIcon from 'assets/icons/header/profile.svg'
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {navigate} from "shared/navigate/navigate";
import {AppRoutes} from "app/router/model/constants/appRoutes";
import FavoritesStore from "entities/favoritesStore/favoritesStore";
import {observer} from "mobx-react-lite";

const Header = observer(() => {

    const {repositories} = FavoritesStore

    return (
            <nav className={cls.headerWrapper}>
                <button
                    onClick={() => navigate(AppRoutes.repositories.path)}
                    className={classNames(cls.logo, {}, [cls.headerButton])}
                >
                    <img src={searchIcon} alt='' />
                    <p>GitHubSearch</p>
                </button>
                <div className={cls.buttonBlock}>
                    <button className={cls.headerButton}>
                        <img
                            onClick={() => navigate(AppRoutes.favorites.path)}
                            src={heartIcon}
                            className={cls.heartIcon}
                            alt=''
                        />
                        {repositories.length > 0 && (
                            <div className={cls.favoritesCount}>{repositories.length}</div>
                        )}
                    </button>
                    <button className={cls.headerButton}>
                        <img
                            src={profileIcon}
                            className={classNames(cls.profileIcon, {}, [cls.profilePadding])}
                            alt=''
                        />
                    </button>
                </div>
            </nav>
    );
});

export default Header;