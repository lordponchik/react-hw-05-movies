import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { LackMovies } from 'components/LackMovies/LackMovies';
import { Loader } from 'components/Loader/Loader';
import { MainHeading } from 'components/MainHeading/MainHeading';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchMoviesForm } from 'components/SearchMoviesForm/SearchMoviesForm';
import { Section } from 'components/Section/Section';
import { fetchSearchMovie } from 'services/api';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMovies, setIsMovies] = useState(true);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    setIsMovies(true);
    if (query === null) return;
    if (query === '') return;

    const responseSearchMovie = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchSearchMovie(query);

        setMovies(results);

        if (results.length === 0) {
          setIsMovies(false);
        }
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    responseSearchMovie();
  }, [query]);

  const handleSubmit = q => {
    if (q === query) return;

    setMovies(null);
    setSearchParams({ query: q });
  };

  return (
    <main>
      <Section>
        <Container>
          <MainHeading title="Search Movies"></MainHeading>
          <SearchMoviesForm handleSubmit={handleSubmit}></SearchMoviesForm>
          {isLoading && <Loader></Loader>}
          {movies && <MoviesList movies={movies} loc={location}></MoviesList>}
          {!isMovies && <LackMovies />}
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;
