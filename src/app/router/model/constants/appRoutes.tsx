import {FavoritesPage} from "pages/favorites";
import {ProfilePage} from "pages/profile";
import {RepositoriesPage} from "pages/repositories";
import {Suspense} from "react";
import Fallback from "app/router/ui/fallback";

export const AppRoutes = {
    repositories: {
        path: '/',
        component: (
            <Suspense fallback={<Fallback />}>
                <RepositoriesPage/>
            </Suspense>
        )
    },
    profile: {
        path: '/profile',
        component: (
            <Suspense fallback={<Fallback />}>
                <ProfilePage/>
            </Suspense>
        )
    },
    favorites: {
        path: '/favorites',
        component: (
            <Suspense fallback={<Fallback />}>
                <FavoritesPage/>
            </Suspense>
        )
    }
}