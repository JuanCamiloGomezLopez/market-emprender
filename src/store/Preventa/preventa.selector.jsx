import { MdAccessTimeFilled } from "react-icons/md";
import { createSelector } from "reselect";

//aqui en selectCategoryReducer guardamos lo que haya en la store de redux correspondiente al reducer de categories
const selectPreventaReducer = (state) => state.preventa;

//aqui guardamos la información en el nuevo selector de selectCategoryReducer, (esta información queda en memoria cache hasta que cambie selectCategoryReducer)
export const selecPreventas = createSelector(
  [selectPreventaReducer], (preventaSlice) => preventaSlice.preventa);  

//aqui ponemos la salida, loq ue queramos que haga solo una vez mientras que categorie no haya cambiado, cuando categories cambie se vuelve a ejecutar
//ese selector recibe un array y lo combierte a un objeto
export const selectPreventasMap = createSelector( [selecPreventas], (preventas) => preventas.reduce((acc, preventa) => {
      const { title, items } = preventa;      
      acc[title] = items;
      return acc;
    }, {})  
);

export const selectPreventasinfoMap = createSelector( [selecPreventas], (preventas) => preventas.reduce((acc, preventa) => {
  const { title, information } = preventa;      
  acc[title] = information;
  return acc;
}, {})  
);