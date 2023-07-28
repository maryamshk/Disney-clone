import { createSlice } from "@reduxjs/toolkit";

// we always have initial state
const initialState = {
    movies: [],  //we start with nothing
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;    //sending new movies from db
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;