import { createSelector } from "reselect";

//aqui en selectCategoryReducer guardamos lo que haya en la store de redux correspondiente al reducer de categories
const selectEmprendimientoaReducer = (state) => state.emprendimientos_list;

//aqui guardamos la información en el nuevo selector de selectCategoryReducer, (esta información queda en memoria cache hasta que cambie selectCategoryReducer)
export const selecEmprendimiento = createSelector(
  [selectEmprendimientoaReducer], (emprendimientoSlice) => emprendimientoSlice.emprendimientos_list);  

//aqui ponemos la salida, loq ue queramos que haga solo una vez mientras que categorie no haya cambiado, cuando categories cambie se vuelve a ejecutar
//ese selector recibe un array y lo combierte a un objeto
export const selectEmprendimientosMap = createSelector( [selecEmprendimiento], (emprendimientos) => emprendimientos.reduce((acc, emprendimiento) => {
      const { title, items } = emprendimiento;      
      acc[title] = items;
      return acc;
    }, {})  
);