import {combineReducers } from "redux"
import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from './slices/filmsSlice'

const rootReducer = combineReducers({
    filmsReducer
})

export const store = configureStore({
    reducer: rootReducer
})

