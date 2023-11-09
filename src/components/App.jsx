import { Route, Routes } from 'react-router-dom';

import { Header } from './Header';
import { Home } from '../pages/Home';
import { SearchMovieByWord } from '../pages/SearchMovie';
import { MovieDetails } from './MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovieByWord />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
