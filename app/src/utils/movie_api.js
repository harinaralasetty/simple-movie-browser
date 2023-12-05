import * as config from './config.json';

const {MOVIE_API} = config; 
const {key: apiKey} = MOVIE_API ;

export const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };

export const searchMovies = async (query) =>{
  try {
    console.log("received query", query);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}