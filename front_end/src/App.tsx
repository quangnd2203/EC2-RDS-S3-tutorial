import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppPages from './application/routers/app_pages';

function App() {
  return (
    <Router>
      <AppPages></AppPages>
    </Router>
  );
}

export default App;