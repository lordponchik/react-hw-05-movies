import { useEffect, useState } from 'react';
import { fetchTrendingsMovies } from 'services/api';
import { Container } from 'components/Container/Container';
import { MainHeading } from 'components/MainHeading/MainHeading';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const responseTrendingsMovie = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingsMovies();

        setMovies(results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    responseTrendingsMovie();
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <MainHeading title={'Trending Today'}></MainHeading>
          {isLoading && <Loader></Loader>}
          {movies && <MoviesList movies={movies}></MoviesList>}
        </Container>
      </Section>
    </main>
  );
};
