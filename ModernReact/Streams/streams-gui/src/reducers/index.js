import { combineReducers } from "redux";

const seedReducer = (oldSeedData = null, action) => {
  if (action.type === "SEED_ACTION") {
    return action.payload;
  }
  return oldSeedData;
};

export default combineReducers({
  selectedSong: seedReducer
});
