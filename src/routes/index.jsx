import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import MainPage from '../pages/MainPage/MainPage';
import WeatherPage from '../pages/WeatherPage/WeatherPage';
const AppRoutes = () => {
  console.log(ROUTES.mainpage)
  return (
    <Routes>
      <Route path={ROUTES.mainpage} element={<MainPage />} />
      <Route path={ROUTES.weather} element={<WeatherPage />} />
    </Routes>
  );
}

export default AppRoutes;
