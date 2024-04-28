import PropTypes from 'prop-types';

import s from './MainHeading.module.css';

export const MainHeading = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
