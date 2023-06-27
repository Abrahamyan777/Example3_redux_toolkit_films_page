import {createSlice} from "@reduxjs/toolkit";
import DB from '../../DB/DB.json'

//ksirunacnes

// const initialState = {
//     films: DB.films.filter(e => e.type === "film"),
// }

// initialState.filtered = initialState.films

//esqany

const initialState = {
    films : DB.films
}
const filmsSlice = createSlice({
    
    name: "films/slice",
    initialState,
    reducers: {
        filterByGenre : (state, action) => {
            state.filtered = state.films.filter(s => s.genre === action.payload)
        }
    }
})

export const {filterByGenre} = filmsSlice.actions

export default filmsSlice.reducer
