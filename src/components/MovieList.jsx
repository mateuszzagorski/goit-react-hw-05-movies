import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ data }) => {
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
};
