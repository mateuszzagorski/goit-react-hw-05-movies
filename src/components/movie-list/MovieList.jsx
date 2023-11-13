import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ data }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {data.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  location: PropTypes.object,
};
