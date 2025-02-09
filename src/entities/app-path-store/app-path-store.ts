import {makeAutoObservable} from "mobx";

class AppPathStore {
    path = '/repositories'

    constructor() {
        makeAutoObservable(this)
    }

    setPath = (path: string) => {
        this.path = path
    }
}

const appPathStore = new AppPathStore();
export default appPathStore;