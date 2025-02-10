import React, {useState} from 'react';
import FavoritesStore from "entities/favoritesStore/favoritesStore";
import RepositoryCard from "widgets/repositoryCard/repositoryCard";
import cls from './favorites.module.css'
import {observer} from "mobx-react-lite";
import Select from "widgets/select/select";
import BackButton from "widgets/backButton/backButton";

const Favorites = observer(() => {

    const {repositories} = FavoritesStore
    const [sortingOption, setSortingOption] = useState<string>('No sorting')

    return (
        <div className={cls.favoritesWrapper}>
            <BackButton />
            {repositories.length === 0 ? (
                <div className={cls.isEmpty}>Пусто :(</div>
            ) : (
                <>
                    <div className={cls.result}>
                        <p>Favorites: {repositories.length}</p>
                        <Select setSortingOption={setSortingOption} sortingOption={sortingOption}/>
                    </div>
                    <div className={cls.favoritesList}>
                        {repositories.map((repository) => (
                            <RepositoryCard {...repository} key={repository.id}/>)
                        )}
                    </div>
                </>
            )}
        </div>
    );
});

export default Favorites;