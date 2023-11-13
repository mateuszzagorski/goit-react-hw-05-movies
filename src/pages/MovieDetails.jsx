import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { getMovieDetails, getFullPosterURL } from '../services/ApiRequests';

import {
  BackLink,
  MovieDetailsBox,
  InfoLink,
  AdditionalInformationBox,
} from '../components/movie-details/MovieDetails.styled.js';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const locationURL = useLocation();
  const votePercentage = (movie.vote_average * 10).toFixed(0) + '%';

  const backLinkHref = () => {
    console.log(id);
    console.log(locationURL.state);
    if (locationURL.state?.from) {
      return locationURL.state.from;
    } else if (locationURL.state === null) {
      return '/';
    } else {
      return `/movies/`;
    }
  };

  useEffect(() => {
    getMovieDetails(id)
      .then(data => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <MovieDetailsBox>
        <div>
          <BackLink to={backLinkHref()}>Go back</BackLink>
          <img src={getFullPosterURL(movie.poster_path)} alt={movie.title} />
        </div>
        <div>
          <h2>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>
          {movie.overview}
          {movie.vote_average > 0 ? <p>User Score: {votePercentage}</p> : null}
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          {genres.length === 1 ? <h3>Genre</h3> : <h3>Genres</h3>}
          <p>{genres.map(genre => genre.name).join(`, `)}</p>
        </div>
      </MovieDetailsBox>
      <h3>Additional information</h3>
      <AdditionalInformationBox>
        <InfoLink to="cast">Cast</InfoLink>
        <br />
        <InfoLink to="reviews">Reviews</InfoLink>
      </AdditionalInformationBox>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.array,
  genres: PropTypes.array,
  id: PropTypes.number,
  locationURL: PropTypes.object,
  votePercentage: PropTypes.number,
  backLinkHref: PropTypes.func,
  getMovieDetails: PropTypes.func,
};
