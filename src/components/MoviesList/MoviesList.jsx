import { Link } from 'react-router-dom';

import s from './MoviesList.module.css';
import no_posterMovie from '../../images/no_posterMovie.jpg';

const poster = `https://image.tmdb.org/t/p/w300/`;

export const MoviesList = ({ movies, loc }) => {
  return (
    <ul className={s.movies}>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <li key={id} className={s.moviesItem}>
            <Link
              to={loc.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: loc }}
            >
              <img
                loading="lazy"
                src={poster_path ? `${poster}${poster_path}` : no_posterMovie}
                alt="title"
                width={280}
              />
              <div className={s.movieMeta}>
                <h2 className={s.movieTitle}>{title}</h2>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
