import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {   
  favorite_product: false,
   };

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,
  reducers:{
  
    setproductfavorite(state, action){
      state.favorite_product = action.payload
    },
    
  }
})

export const { setproductfavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer