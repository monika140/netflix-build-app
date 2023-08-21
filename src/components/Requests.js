//Typically we would store in {process.env.API_KEY}
const API_KEY = "1a560ea646a4ff9b0b22ce357048f4b9";

const endpoints = {
  fetchTrendingNow: `/trending/all/day?api_key=${API_KEY}language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}with_genres=99`,
};
export default endpoints;

