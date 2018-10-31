import { combineReducers } from "redux";
import MovieReducer from "../components/Home/reducer";

export default combineReducers({
  home: MovieReducer
});
