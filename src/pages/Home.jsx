import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getTrending } from '../services/ApiRequests';
import MoviesList from 'components/movie-list/MovieList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList data={trendingMovies} />
    </>
  );
}

Home.propTypes = {
  trendingMovies: PropTypes.array,
  getTrending: PropTypes.func,
};
