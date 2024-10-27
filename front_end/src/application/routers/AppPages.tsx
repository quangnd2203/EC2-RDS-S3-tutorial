// AppPages.js
import { Route, Routes } from 'react-router-dom';
import AppRouters from './AppRouters';
import SplashScreen from 'application/screens/splash';
import LoginScreen from 'application/screens/login';
import DashboardScreen from 'application/screens/dashboard';
import BlogScreen from 'application/screens/blog';

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
