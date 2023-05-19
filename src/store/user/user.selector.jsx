import { createSelector } from "reselect";


// selectCartReducer trae el cart de la tienda, trae todo el reducer del cart
export const selectUserReducer = state => state.user;


// ****************** guarda en memoria ************************

export const selectIsSiginOpen = createSelector(
    [selectUserReducer],
    (user)=>user.setSigninOpen
)

export const selectListUser = createSelector(
    [selectUserReducer],
    (user)=> user.listUser
)

export const selectItemUser = createSelector(
    [selectUserReducer],
    (user)=> user.itemUser
)

export const selectuseruid = createSelector(
    [selectUserReducer],
    (user)=> user.useruid
)











