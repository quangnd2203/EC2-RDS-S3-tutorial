// AppPages.js
import { Route, Routes } from 'react-router-dom';
import AppRouters from './appRouters';
import DashboardScreen from 'application/features/dashboard/dashboard';
import SplashScreen from 'application/features/splash/splash';
import LoginScreen from 'application/features/login/login';

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
