import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits, getFullPosterURL } from '../services/ApiRequests';

export const Cast = () => {
  const [allCast, setAllCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCredits(id)
      .then(data => {
        setAllCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <ul className="cast-list">
      {allCast.map(actor => {
        const id = nanoid();
        return (
          <li className="cast-item" key={id}>
            {actor.profile_path && (
              <img
                src={getFullPosterURL(actor.profile_path)}
                alt={actor.name}
              />
            )}
            <h3>Author: {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
