import React from 'react';
import './App.css';
import AppPages from 'application/routers';
import { Provider } from 'react-redux';
import store from 'application/redux';
import { BrowserRouter } from 'react-router-dom';
import { injectDependencies } from 'common/config';
import { initializeFirebaseApp } from 'common/config/AppFirebase';

function App() {
    injectDependencies();
    initializeFirebaseApp();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppPages></AppPages>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
