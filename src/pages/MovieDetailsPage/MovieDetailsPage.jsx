import {
  useParams,
  Link,
  NavLink,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import s from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import no_posterMovie from '../../images/no_posterMovie.jpg';

const poster = `https://image.tmdb.org/t/p/w300/`;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const stateFrom = location.state.from;

  useEffect(() => {
    const responseMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    responseMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Section>
        <Container>
          {isLoading && <Loader></Loader>}

          {movie && (
            <>
              <Link to={backLinkHref} className={s.linkBack}>
                &#8604; Go back
              </Link>
              <div className={s.movie}>
                <img
                  src={
                    movie.poster_path
                      ? `${poster}${movie.poster_path}`
                      : no_posterMovie
                  }
                  alt={movie.title}
                  className={s.poster}
                  width={300}
                />
                <div className={s.wrapperDescription}>
                  <div className={s.meta}>
                    <h1 className={s.title}>
                      {movie.original_title} ({movie.release_date.split('-')[0]}
                      )
                    </h1>
                    <p className={s.score}>
                      User Score:
                      <span className={s.scoreInfo}>
                        {movie.vote_average > 0
                          ? ` ${Math.trunc(movie.vote_average * 10)}%`
                          : ` we wait`}
                      </span>
                    </p>
                  </div>
                  <div className={s.meta}>
                    <h2 className={s.title}>Overview</h2>
                    <p className={s.description}>{movie.overview}</p>
                  </div>
                  <div className={s.meta}>
                    <h2 className={s.title}>Genres</h2>
                    <p className={s.genres}>
                      {movie.genres.map(({ name }) => name).join(' ')}
                    </p>
                  </div>
                </div>
              </div>
              <div className={[s.meta, s.metaAddInfo].join(' ')}>
                <h3 className={s.title}>Additional information</h3>
                <ul className={s.addInfo}>
                  <li className={s.addInfoItem}>
                    <NavLink
                      to="cast"
                      className={({ isActive }) =>
                        [s.addInfoLink, isActive ? s.active : ''].join(' ')
                      }
                      state={{ from: stateFrom }}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li className={s.addInfoItem}>
                    <NavLink
                      to="reviews"
                      className={({ isActive }) =>
                        [s.addInfoLink, isActive ? s.active : ''].join(' ')
                      }
                      state={{ from: stateFrom }}
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <Suspense fallback={<Loader></Loader>}>
                    <Outlet></Outlet>
                  </Suspense>
                </div>
              </div>
            </>
          )}
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetailsPage;
