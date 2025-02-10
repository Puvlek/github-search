import React, {useEffect, useLayoutEffect} from 'react';
import Header from "features/header/header";
import  './styles/reset.css'
import {renderPage} from "app/helpers/renderPage";
import {observer} from "mobx-react-lite";
import {navigate} from "shared/navigate/navigate";
import cls from './App.module.css'
import AppPathStore from "entities/appPathStore/appPathStore";

const App = observer(() => {

    const {path, setPath} = AppPathStore

    const getPageFromURL = () => {
        return window.location.pathname;
    };

    useLayoutEffect(() => {
        if (window.location.pathname !== '/') {
            navigate(getPageFromURL())
        } else {
            window.history.pushState({}, '', path);
        }
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            setPath(getPageFromURL());
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);


    return (
        <div className={cls.app}>
            <Header />
            <div className={cls.globalMargin}>
                {renderPage(path)}
            </div>
        </div>
    )
});

export default App;
