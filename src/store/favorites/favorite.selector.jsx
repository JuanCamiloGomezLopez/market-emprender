import { createSelector } from "reselect";

// selectCartReducer trae el cart de la tienda, trae todo el reducer del cart
export const selectFavoriteReducer = (state) => state.favorite_product;

// ****************** guarda en memoria ************************

export const selectIsFavorite = createSelector(
  [selectFavoriteReducer],
  (favorite_slice) => favorite_slice.favorite_product
);
