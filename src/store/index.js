import { configureStore, createSlice } from "@reduxjs/toolkit";
import { reset } from "./actions";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsSlice.reduce,
    movies: movieSlice.reducer,
  },
});

export { reset, store, addSong, removeSong, addMovie, removeMovie };
