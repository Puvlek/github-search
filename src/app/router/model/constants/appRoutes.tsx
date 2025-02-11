import {FavoritesPage} from "pages/favorites";
import {ProfilePage} from "pages/profile";
import {RepositoriesPage} from "pages/repositories";
import {Suspense} from "react";

export const AppRoutes = {
    repositories: {
        path: '/repositories',
        component: (
            <Suspense fallback={<div>Loading...</div>}>
                <RepositoriesPage/>
            </Suspense>
        )
    },
    profile: {
        path: '/profile',
        component: (
            <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage/>
            </Suspense>
        )
    },
    favorites: {
        path: '/favorites',
        component: (
            <Suspense fallback={<div>Loading...</div>}>
                <FavoritesPage/>
            </Suspense>
        )
    }
}