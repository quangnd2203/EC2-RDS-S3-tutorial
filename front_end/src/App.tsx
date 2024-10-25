import React from 'react';
import './App.css';
import AppPages from 'application/routers/app_pages';
import { Provider } from 'react-redux';
import store from 'application/redux/store';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppPages></AppPages>
            </Router>
        </Provider>
    );
}

export default App;
