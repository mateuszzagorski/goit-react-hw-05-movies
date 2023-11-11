import { getMovieReviews } from '../services/ApiRequests';

export const Reviews = ({ id }) => {
  console.log('hello');
  const allReviews = getMovieReviews(496450);
  console.log(allReviews);
  return (
    <div>Hello</div>
    //   <ul>
    //   {allReviews.map(review => {
    //     console.log(review);
    //     return (
    //       <li key={movie.id}>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};

// Reviews();
