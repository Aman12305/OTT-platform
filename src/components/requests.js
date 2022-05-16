// const API_KEY=process.env.REACT_APP_TMDB;
const API_KEY=process.env.REACT_APP_TMDB;
// const api = process.env.REACT_APP_TMDB;

// console.log(api);


const requests={
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAmanzonOriginals: `/discover/tv?api_key=${API_KEY}&with_network=1024`,
  fetchDisneyOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=3919`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch : `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=`
}

export default requests;