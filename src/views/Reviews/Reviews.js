import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/movieAPI';
import { Wrapper, ReviewsItem } from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <section>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <Wrapper>
          {reviews.map(item => (
            <ReviewsItem key={item.id}>
              <p>{new Date(item.created_at).toUTCString()}</p>
              <p> {item.content}</p>
              <p>Author: {item.author}</p>
            </ReviewsItem>
          ))}
        </Wrapper>
      ) : (
        <p>We cannot find any reviews</p>
      )}
    </section>
  );
}

export default Reviews;
