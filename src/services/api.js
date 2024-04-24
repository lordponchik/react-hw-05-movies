import axios from 'axios';

const key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsInN1YiI6IjY0ODFjYzljZTI3MjYwMDBlOGJmNGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtFaymxRhIox3C-tQMTvFRWDPJCwAg6fzVmEnnO60cA';
const url = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

export const fetchTrendingsMovies = async () => {
  const response = await axios.get(`${url}trending/movie/day`, options);
  const data = response.data;
  return data;
};
