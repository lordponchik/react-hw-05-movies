import { Link } from 'react-router-dom';
import s from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={s.error}>
      <h1 className={s.errorTitle}>404 - Page not found</h1>
      <Link to="/" className={s.errorLink}>
        Back to HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
