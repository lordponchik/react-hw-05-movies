import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { fetchReviews } from 'services/api';
import s from './Reviews.module.css';
import { LackInformation } from 'components/LackInformation/LackInformation';

const Reviews = () => {
  const { movieId } = useParams();
  const [movReviews, setMovReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const responseReviews = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchReviews(movieId);

        setMovReviews(results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    responseReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movReviews.length !== 0 ? (
        <ul className={s.reviews}>
          {movReviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={s.reviewsItem}>
                <h4 className={s.title}>
                  <span className={s.titleAuthor}>Author:</span> {author}
                </h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <LackInformation information={'reviews'}></LackInformation>
      )}
    </div>
  );
};

export default Reviews;
