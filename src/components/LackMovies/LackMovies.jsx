import s from './LackMovies.module.css';

export const LackMovies = () => {
  return (
    <div className={s.report}>
      <p>Unfortunately, no films were found for this request.</p>
    </div>
  );
};
