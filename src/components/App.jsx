import { HomePage } from 'pages/HomePage/HomePage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPage />}></Route>
      </Route>
    </Routes>
  );
};
