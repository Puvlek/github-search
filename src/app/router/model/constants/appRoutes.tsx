import Repositories from "pages/repositories/repositories";
import Profile from "pages/profile/profile";
import Favorites from "pages/favorites/favorites";

export const AppRoutes = {
    repositories: {
        path: '/repositories',
        component: <Repositories />
    },
    profile: {
        path: '/profile',
        component: <Profile />
    },
    favorites: {
        path: '/favorites',
        component: <Favorites />
    }
}