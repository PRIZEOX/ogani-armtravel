import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './features/favoriteSlices'

export const store = configureStore({
 reducer:{
    favorites: favoriteReducer,
 },
})