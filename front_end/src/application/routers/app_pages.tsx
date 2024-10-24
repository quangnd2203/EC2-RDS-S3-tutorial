// AppPages.js
import { Route, Routes } from 'react-router-dom';
import AppRouters from './app_routers';
import SplashScreen from '../features/splash/splash';
import LoginScreen from '../features/login/login';
import DashboardScreen from '../features/dashboard/dashboard';

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