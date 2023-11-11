import { Link, useParams } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
