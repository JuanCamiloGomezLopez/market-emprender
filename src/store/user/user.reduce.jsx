import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
  currentUser: null,
  setSigninOpen: false,
  listUser: [] };

export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers:{
    setCurrentUser(state, action){
      state.currentUser = action.payload
    },
    setSigninOpen(state, action){
      state.setSigninOpen = action.payload
    },
    setListUser(state, action){
      state.listUser = action.payload
    },
  }
})

export const {setCurrentUser, setSigninOpen, setListUser} = userSlice.actions;

export const userReducer = userSlice.reducer