import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/ApiRequests';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id)
      .then(data => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log(movieDetails);
  return <div>MovieDetails: {movieDetails.overview}</div>;
};
