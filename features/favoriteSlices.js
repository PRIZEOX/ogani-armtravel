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
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        let newFavorite = [...state.items];

        if(index>=0){
          newFavorite.splice(index,1);
        }else{
          console.warn(`
            Cant remove hotel (id : ${action.payload.id}) cause its not in basket
          `)
        };
    }
  }
})

// Action creators are generated for each case reducer function
export const {addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer;
