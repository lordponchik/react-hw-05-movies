import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import s from './Cast.module.css';
import { LackInformation } from 'components/LackInformation/LackInformation';
import no_posterCast from '../../images/no_posterCast.jpg';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const poster = `https://image.tmdb.org/t/p/w300`;

const Cast = () => {
  const { movieId } = useParams();
  const [movCast, setMovCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const responseMovieCast = async () => {
      setIsLoading(true);
      try {
        const { cast } = await fetchCast(movieId);

        setMovCast(cast);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    responseMovieCast();
  }, [movieId]);

  return (
    <>
      <Section>
        {movCast ? (
          <ul className={s.cast}>
            {movCast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id} className={s.castItem}>
                  <img
                    src={
                      profile_path ? `${poster}${profile_path}` : no_posterCast
                    }
                    alt={name}
                    width={100}
                    height={150}
                    className={s.castImg}
                  />
                  <div className={s.castMeta}>
                    <h3 className={s.castTitle}>{name}</h3>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <LackInformation information={'cast'}></LackInformation>
        )}
      </Section>
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
