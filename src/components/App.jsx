import { Route, Routes } from 'react-router-dom';

import { Header } from '../pages/Header';
import { Home } from '../pages/Home';
import { SearchMovieByWord } from '../pages/SearchMovie';
import { MovieDetails } from '../pages/MovieDetails';
import { Reviews } from './reviews/Reviews';
import { Cast } from './cast/Cast';

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
