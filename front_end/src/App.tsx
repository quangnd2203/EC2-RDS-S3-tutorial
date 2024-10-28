import React from 'react';
import './App.css';
import AppPages from 'application/routers';
import { Provider } from 'react-redux';
import { Provider as InversifyProvider } from 'inversify-react';
import store from 'application/redux';
import { BrowserRouter } from 'react-router-dom';
import { AppDependencies } from 'common/config';

function App() {
    return (
        <InversifyProvider container={AppDependencies}>
            <Provider store={store}>
                <BrowserRouter>
                    <AppPages></AppPages>
                </BrowserRouter>
            </Provider>
        </InversifyProvider>
    );
}

export default App;
