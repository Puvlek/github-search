import React, {useEffect, useLayoutEffect} from 'react';
import AppPathStore from "entities/app-path-store/app-path-store";
import Header from "features/header/header";
import  './styles/reset.scss'
import {renderPage} from "app/helpers/renderPage";
import {observer} from "mobx-react-lite";

const App = observer(() => {

    const {path, setPath} = AppPathStore

    const getPageFromURL = () => {
        return window.location.pathname;
    };

    useLayoutEffect(() => {
        setPath(getPageFromURL());
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            setPath(getPageFromURL());
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);


    return (
        <div>
            <Header />
            {renderPage(path)}
        </div>
    )
});

export default App;
