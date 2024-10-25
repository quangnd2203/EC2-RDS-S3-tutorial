// AppPages.js
import { Route, Routes } from 'react-router-dom';
import AppRouters from './appRouters';
import SplashScreen from 'application/features/splash';
import LoginScreen from 'application/features/login';
import DashboardScreen from 'application/features/dashboard';
import BlogScreen from 'application/features/blog';

const AppPages = () => {
    return (
        <Routes>
            <Route path={AppRouters.SPLASH} element={<SplashScreen />} />
            <Route path={AppRouters.LOGIN} element={<LoginScreen />} />
            <Route path={AppRouters.DASHBOARD} element={<DashboardScreen />} />
            <Route path={AppRouters.BLOG} element={<BlogScreen />} />
        </Routes>
    );
};

export default AppPages;
