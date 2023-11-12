import { MoviesList } from 'components/movie-list/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from '../services/ApiRequests';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        console.log(data);
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
};
