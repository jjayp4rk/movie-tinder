import { GET_MOVIES_SIMILAR, GET_MOVIES_SIMILAR_FIRST } from './actions';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

const INITIAL_STATE = {
  movies: [],
  isFetched: false,
  error: null,
  length: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIES_SIMILAR}_PENDING`:
      return {
        ...state,
        isFetched: false
      };
    case `${GET_MOVIES_SIMILAR}_FULFILLED`:
      let unfilteredMovies = [...state.movies, ...action.payload.results];

      let filteredMovies = [
        ...new Set(unfilteredMovies.map(v => JSON.stringify(v)))
      ].map(v => JSON.parse(v));

      let movies;

      if (state.length !== filteredMovies.length) {
        movies = shuffleArray(filteredMovies);
      } else {
        movies = filteredMovies;
      }
      return {
        ...state,
        isFetched: true,
        movies: movies,
        length: filteredMovies.length
      };
    case `${GET_MOVIES_SIMILAR}_REJECTED`:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };

    default:
      return state;
  }
};
