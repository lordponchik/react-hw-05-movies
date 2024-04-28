import s from './LackInformation.module.css';

export const LackInformation = ({ information }) => {
  return (
    <p className={s.title}>We don't have any {information} for this film</p>
  );
};
