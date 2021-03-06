import { combineReducers } from "redux";
import MovieReducer from "../components/Home/reducer";
import MovieLikerReducer from "../components/MovieLiker/reducer";
import MovieCardReducer from "../components/MovieCard/reducer";
import SimilarMovieReducer from "../components/SimilarMovies/reducer";
import MoviePageReducer from "../components/MoviePage/reducer";

export default combineReducers({
  home: MovieReducer,
  likedMovie: MovieLikerReducer,
  movieCard: MovieCardReducer,
  similarMovies: SimilarMovieReducer,
  moviePage: MoviePageReducer
});
