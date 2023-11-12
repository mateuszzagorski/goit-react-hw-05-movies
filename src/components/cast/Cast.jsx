import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits, getFullPosterURL } from '../../services/ApiRequests';

import { CastList, CastItem } from './Cast.styled';

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
    <CastList>
      {allCast.map(actor => {
        const id = nanoid();
        return (
          <CastItem key={id}>
            {actor.profile_path ? (
              <img
                src={getFullPosterURL(actor.profile_path)}
                alt={actor.name}
              />
            ) : (
              <img
                srcSet={`${process.env.PUBLIC_URL}/no-poster.jpg`}
                alt={actor.name}
              />
            )}
            <h3>Author: {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};
