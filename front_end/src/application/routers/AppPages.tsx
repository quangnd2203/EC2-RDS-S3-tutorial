// AppPages.js
import { Route, Routes } from 'react-router-dom';
import AppRouters from './appRouters';
import SplashScreen from 'application/features/splash';
import LoginScreen from 'application/features/login';
import DashboardScreen from 'application/features/dashboard';

const AppPages = () => {
    return (
        <Routes>
            <Route path={AppRouters.SPLASH} element={<SplashScreen />} />
            <Route path={AppRouters.LOGIN} element={<LoginScreen />} />
            <Route path={AppRouters.DASHBOARD} element={<DashboardScreen />} />
        </Routes>
    );
};

export default AppPages;
