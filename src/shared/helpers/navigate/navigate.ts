import AppPathStore from "entities/appPathStore/appPathStore";

const {setPath} = AppPathStore

export const navigate = (path: string) => {
    setPath(path);
    window.history.pushState({}, '', path);
};