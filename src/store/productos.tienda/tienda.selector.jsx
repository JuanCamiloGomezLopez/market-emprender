import { createSelector } from "reselect";

//aqui en selectCategoryReducer guardamos lo que haya en la store de redux correspondiente al reducer de categories
const selectTiendaReducer = (state) => state.tienda;

//aqui guardamos la información en el nuevo selector de selectCategoryReducer, (esta información queda en memoria cache hasta que cambie selectCategoryReducer)
export const selecTienda = createSelector(
  [selectTiendaReducer], (preventaSlice) => preventaSlice.tienda);  

//aqui ponemos la salida, loq ue queramos que haga solo una vez mientras que categorie no haya cambiado, cuando categories cambie se vuelve a ejecutar
//ese selector recibe un array y lo combierte a un objeto
export const selectTiendaMap = createSelector( [selecTienda], (productos) => productos.reduce((acc, producto) => {
      const { title, items } = producto;      
      acc[title] = items;
      return acc;
    }, {})  
);

