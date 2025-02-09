import React, {useEffect, useLayoutEffect} from 'react';
import AppPathStore from "entities/app-path-store/app-path-store";
import Header from "features/header/header";
import  './styles/reset.css'
import {renderPage} from "app/helpers/renderPage";
import {observer} from "mobx-react-lite";
import {navigate} from "shared/navigate/navigate";

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
        <div style={{backgroundColor: '#ebecec'}}>
            <Header />
            {renderPage(path)}
        </div>
    )
});

export default App;
