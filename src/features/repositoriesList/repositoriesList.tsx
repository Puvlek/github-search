import React, {FC, useCallback, useEffect, useState} from 'react'
import RepositoryCard from "widgets/repositoryCard/repositoryCard"
import {getRepositories} from "features/repositoriesList/api/getRepositories"
import {RepositoriesList} from "features/repositoriesList/model/types/repository-type"
import cls from './repositoriesList.module.css'
import {throttle} from "shared/throttle/throttle"
import Select from "widgets/select/select"

const RepositoriesList: FC<{ searchValue: string }> = ({searchValue}) => {

    const [repositories, setRepositories] = useState<RepositoriesList>({
        total_count: 0,
        items: []
    })

    const [sortingOption, setSortingOption] = useState("No sorting")

    const [page, setPage] = useState<number>(0)
    const [fetching, setFetching] = useState<boolean>(false)

    const getRepositoriesAsync = async (search: string, page: number, sortingOption: string, isNewSearch: boolean) => {
        const result = await getRepositories(search, page, sortingOption);
        if (isNewSearch) {
            setRepositories({
                total_count: 0,
                items: []
            })
        }
        setRepositories(prevState => {
            return {
                total_count: result.total_count,
                items: prevState.items.concat(result.items)
            }
        })
        setPage(prevState => prevState + 1)
    }

    const getRepositoriesAsyncThrottle = useCallback(
        throttle((search: string, page: number, sortingOption: string, isNewSearch: boolean) =>
            getRepositoriesAsync(search, page, sortingOption, isNewSearch), 1000),
        []
    )

    useEffect(() => {
        getRepositoriesAsyncThrottle(searchValue, 0, sortingOption, true)
    }, [searchValue, sortingOption]);

    useEffect(() => {
        if (fetching) {
            getRepositoriesAsyncThrottle(searchValue, page, sortingOption, false)
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = window.innerHeight

        if (scrollHeight - (scrollTop + clientHeight) < 100) {
            setFetching(true);
        }
    }

    return (
        <>
            <div className={cls.result}>
                <p>Result: {repositories.total_count ? repositories.total_count : 0} repositories</p>
                <Select setSortingOption={setSortingOption} sortingOption={sortingOption}/>
            </div>
            <div className={cls.repositoriesList}>
                {repositories.items.length > 0 && repositories.items.map((repository) => (
                    <RepositoryCard
                        key={repository.id}
                        {...repository}
                    />
                ))}
            </div>
        </>
    );
};

export default RepositoriesList;