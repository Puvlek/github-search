import AppPathStore from "entities/app-path-store/app-path-store";

const {setPath} = AppPathStore

export const navigate = (path: string) => {
    setPath(path);
    window.history.pushState({}, '', path);
};