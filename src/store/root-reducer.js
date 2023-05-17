import { combineReducers } from "@reduxjs/toolkit";
import { preventaReducer } from "./Preventa/preventa.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { emprendimientos_listReducer } from "./emprendimientos-list/list.reducer";
import { tiendaReducer } from "./productos.tienda/tienda.reducer";
import {userReducer} from "../store/user/user.reduce"
import { favoriteReducer } from "./favorites/favorite.reduce";

export const rootReducer = combineReducers({
    preventa: preventaReducer,
    cart: cartReducer,  
    emprendimientos_list: emprendimientos_listReducer,
    tienda: tiendaReducer,
    user: userReducer,
    favorite_product: favoriteReducer,
})