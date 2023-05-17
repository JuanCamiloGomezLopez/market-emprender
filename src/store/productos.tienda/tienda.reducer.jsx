import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { tienda: [], };

export const tiendaSlice = createSlice({
  name: "tienda",
  initialState: INITIAL_STATE,
  reducers:{
    setTienda(state, action){
      state.tienda = action.payload
    }
  }
})

export const {setTienda} = tiendaSlice.actions;

export const tiendaReducer = tiendaSlice.reducer