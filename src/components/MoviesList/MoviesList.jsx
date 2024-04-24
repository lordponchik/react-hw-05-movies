import s from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={s.movies}>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <li key={id} className={s.moviesItem}>
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt="title"
              width={280}
            />
            <div className={s.movieMeta}>
              <h2 className={s.movieTitle}>{title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
