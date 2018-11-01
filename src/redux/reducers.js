import { combineReducers } from 'redux';
import MovieReducer from '../components/Home/reducer';
import MovieLikerReducer from '../components/MovieLiker/reducer';
import MovieCardReducer from '../components/MovieCard/reducer';

export default combineReducers({
  home: MovieReducer,
  likedMovie: MovieLikerReducer,
  movieCard: MovieCardReducer
});
