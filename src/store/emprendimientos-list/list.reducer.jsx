import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { emprendimientos_list: [], };

export const emprendimientos_listSlice = createSlice({
  name: "preventa",
  initialState: INITIAL_STATE,
  reducers:{
    setEmprenderlist(state, action){
      state.emprendimientos_list = action.payload
    }
  }
})

export const {setEmprenderlist} = emprendimientos_listSlice.actions;

export const emprendimientos_listReducer = emprendimientos_listSlice.reducer