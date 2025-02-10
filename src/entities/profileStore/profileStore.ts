import {makeAutoObservable} from "mobx";
import {Repository} from "entities/appPathStore/types/repository-types";

class ProfileStore {
    constructor() {
        makeAutoObservable(this)
    }

    repository: Repository = null

    setProfileRepository = (repository: Repository) => {
        this.repository = repository
    }
}

const profileStore = new ProfileStore()
export default profileStore