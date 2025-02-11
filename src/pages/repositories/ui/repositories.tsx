import React, {useState} from 'react';
import cls from './repositories.module.css'
import RepositoriesList from "features/repositoriesList/repositoriesList";

const Repositories = () => {

    const [searchVale, setSearchVale] = useState<string>('')

    return (
        <div className={cls.repositoriesWrapper}>
            <input
                className={cls.searchTextField}
                type="text"
                placeholder="Search"
                value={searchVale}
                onChange={(e) => setSearchVale(e.target.value)}
            />

            <RepositoriesList searchValue={searchVale}/>
        </div>
    );
};

export default Repositories;