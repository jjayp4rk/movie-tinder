import { fetchMoviePopular } from "../../helpers";

export const GET_MOVIES_POPULAR = "GET_MOVIES_POPULAR";
export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const GO_TO_PAGE = "GO_TO_PAGE";

export const getMoviesPopular = page => {
  const data = fetchMoviePopular(page);

  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
};

export const incrementPage = () => {
  return {
    type: INCREMENT_PAGE
  };
};

// export const goToPage = pageNum => {
//   return {
//     type: GO_TO_PAGE,
//     payload: pageNum
//   };
// };
