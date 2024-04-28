import PropTypes from 'prop-types';

import s from './LackInformation.module.css';

export const LackInformation = ({ information }) => {
  return (
    <p className={s.title}>We don't have any {information} for this film</p>
  );
};

LackInformation.propTypes = {
  information: PropTypes.string.isRequired,
};
