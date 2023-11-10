import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/ApiRequests';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id)
      .then(data => {
        console.log(data);
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const votePercentage = (movie.vote_average * 10).toFixed(0) + '%';
  return (
    <div>
      <h2>
        {movie.title} ({movie.release_date})
      </h2>
      {movie.overview}
      {movie.vote_average > 0 ? <p>User Score: {votePercentage}</p> : null}
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(`, `)}</p>
    </div>
  );
};

// getGenres();
