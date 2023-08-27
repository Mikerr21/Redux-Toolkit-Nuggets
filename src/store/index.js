import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // Not now
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
});

store.dispatch({
  type: "song/addSong",
  payload: "NEW SONG!"
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));
