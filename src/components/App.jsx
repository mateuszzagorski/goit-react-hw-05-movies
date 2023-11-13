import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('../pages/Header'));
const Home = lazy(() => import('../pages/Home'));
const SearchMovieByWord = lazy(() => import('../pages/SearchMovie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<SearchMovieByWord />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
