import {Repository} from "entities/appPathStore/types/repository-types"
import {makeAutoObservable} from "mobx"


class FavoritesStore {

    constructor() {
        makeAutoObservable(this)
    }

    repositories: Repository[] = []

    setRepository = (repository: Repository) => {
        this.repositories.push(repository)
    }

    deleteRepository = (repository: Repository) => {
        this.repositories = this.repositories.filter((ownRepository) => ownRepository.id !== repository.id)
    }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;