import {AppRoutes} from "app/router/model/constants/appRoutes";

export const renderPage = (path: string) => {

    switch (path) {
        case AppRoutes.repositories.path:
            return AppRoutes.repositories.component
        case AppRoutes.profile.path:
            return AppRoutes.profile.component
        case AppRoutes.favorites.path:
            return AppRoutes.favorites.component
        default:
            return (<div>wrong page(</div>)
    }
}