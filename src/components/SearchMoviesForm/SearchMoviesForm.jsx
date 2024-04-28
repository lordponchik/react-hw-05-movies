import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import s from './SearchMoviesForm.module.css';

export const SearchMoviesForm = ({ handleSubmit }) => {
  const [valueQuery, setValueQuery] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) return;
    setValueQuery(query);
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    const formQuery = e.currentTarget.elements.query.value;

    if (formQuery.trim() === '') {
      toast.warn('You searched for "nothing". "Nothing" found');
    }

    handleSubmit(formQuery);
  };

  const handleInput = e => {
    const { value } = e.currentTarget;

    setValueQuery(value);
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input
        type="text"
        name="query"
        value={valueQuery}
        onChange={handleInput}
        className={s.inputSearch}
        placeholder="search movie"
      />

      <button type="submit" className={s.submitBtn}>
        <CiSearch className={s.submitIcon} />
      </button>
    </form>
  );
};

SearchMoviesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
