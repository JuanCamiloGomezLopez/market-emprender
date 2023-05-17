import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { preventa: [], };

export const preventaSlice = createSlice({
  name: "preventa",
  initialState: INITIAL_STATE,
  reducers:{
    setPreventa(state, action){
      state.preventa = action.payload
    }
  }
})

export const {setPreventa} = preventaSlice.actions;

export const preventaReducer = preventaSlice.reducer