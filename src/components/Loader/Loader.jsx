import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return <ThreeDots wrapperClass={s.loader} />;
};
