import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: []
  },
  reducers:{
    addToFavorite: (state, action) => {
        state.items = [...state.items, action.payload];
    },
    removeFromFavorite: (state, action) =>{

    }
  }
})

// Action creators are generated for each case reducer function
export const {addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer;
