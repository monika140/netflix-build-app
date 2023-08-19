//Typically we would store in {process.env.API_KEY}
const API_KEY = "1a560ea646a4ff9b0b22ce357048f4b9";

const endpoints = {
  fetchTrendingNow: `/trending/all/day?language=en-US`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTopRated: `/discover/movie?language=en-US`,
  fetchActionMovies: `/discover/movie?with_generes=28`,
  fetchComedyMovies: `/discover/movie?with_generes=35`,
  fetchHorrorMovies: `/discover/movie?with_generes=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentries: `/discover/movie?with_genres=99`,
};
export default endpoints;