import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/ApiRequests';

import { ReviewItem } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);
  return (
    <ul>
      {reviews.map(review => {
        const id = nanoid();
        return (
          <ReviewItem key={id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </ReviewItem>
        );
      })}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
  id: PropTypes.number,
  getMovieReviews: PropTypes.func,
};
