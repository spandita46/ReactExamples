import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Oh Baby!", duration: "4:05" },
    { title: "Hero", duration: "2:30" },
    { title: "Move the Mountains", duration: "3:45" },
    { title: "On Way To Home", duration: "5:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
