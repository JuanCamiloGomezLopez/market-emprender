import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {   
  favorite_product: [],
   };

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,
  reducers:{
  
    setproductfavorite(state, action){
      state.favorite_product = action.payload
    },

    addItemToFavorite(state, action){
      state.favorite_product = addFavoritetItem(state.caritems, action.payload)
    },
    
  }
})


const addFavoritetItem = (favorite_product, productToadd) => {
  /* primero verificamos si el producto ingresado existe en caritems mediante el metodo fiind el cual
  devuelve un booleano*/
 
  const existingFavorite = favorite_product.find(
    (favorite_product) => favorite_product.producto === productToadd.producto
  );

  /* aqui verificamos si la funcion existingCaritem retorna un true o un false, se acuerdo a esto se actuali<a el estado de caritem*/
  if (existingFavorite) {
    /* aqui returnamos lo siguiente. si existingCaritem es true, mantenmos todo el caritems y le agregamos una canbtidad*/
    return favorite_product.map((favorite_product) =>
    favorite_product.producto === productToadd.producto
        ? { ...favorite_product, quantity: caritem.quantity + 1 }
        : /* aqui returnamos lo siguiente. si existingCaritem es false, mantenemos caritem igual*/
          caritem
    );
  }
  
  /* adicioonalmente si existingCaritem es falso es porque el producto no existe, en ese caso retornamos todo lo que tenia caritems y 
  lse sumamos un nuevo item llamado productToadd y agregamos la cantidad de 1*/
  return [...caritems, { ...productToadd, quantity: 1 }];
};

export const { setproductfavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer