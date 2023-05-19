import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { 
  currentUser: null,
  setSigninOpen: false,
  listUser: [],
  itemUser: [],
  useruid: "" };

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
    setItemcurrentUser(state, action){
      state.itemUser = action.payload
    },
    setUseruid(state, action){
      state.useruid = action.payload
    },
  }
})

export const {setCurrentUser, setSigninOpen, setListUser, setItemcurrentUser, setUseruid} = userSlice.actions;

export const userReducer = userSlice.reducer