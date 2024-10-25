import React from 'react';
import './App.css';
import AppPages from 'application/routers/AppPages';
import { Provider } from 'react-redux';
import store from 'application/redux/store';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppPages></AppPages>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
