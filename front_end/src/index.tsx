import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { injectDependencies } from 'common/config';
import { initializeFirebaseApp } from 'common/config/AppFirebase';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
injectDependencies();
initializeFirebaseApp();

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
