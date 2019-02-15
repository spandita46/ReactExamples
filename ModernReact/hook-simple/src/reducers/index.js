import { combineReducers } from "redux";
import { SEED_ACTION } from "../actions/actionTypes";

const seedReducer = (oldSeedData = null, action) => {
  if (action.type === SEED_ACTION) {
    return action.payload;
  }
  return oldSeedData;
};

export default combineReducers({
  selectedSong: seedReducer
});
