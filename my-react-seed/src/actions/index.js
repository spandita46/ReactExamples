import { SEED_ACTION } from "./actionTypes";

export const selectSong = data => {
  return {
    type: SEED_ACTION,
    payload: data
  };
};
