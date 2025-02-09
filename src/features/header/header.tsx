import React from 'react';
import {navigate} from "shared/navigate/navigate";
import {AppRoutes} from "app/router/model/constants/appRoutes";

const Header = () => {
    return (
        <div>
            <nav>
                <button onClick={() => navigate(AppRoutes.repositories.path)}>1</button>
                <button onClick={() => navigate(AppRoutes.profile.path)}>2</button>
                <button onClick={() => navigate(AppRoutes.favorites.path)}>3</button>
            </nav>
        </div>
    );
};

export default Header;