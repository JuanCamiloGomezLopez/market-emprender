import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  caritems: [],
  caropen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers:{
    addItemToCart(state, action){
      state.caritems = addCartItem(state.caritems, action.payload)
    },
    removetemToCart(state, action){
      state.caritems = removeCartItem(state.caritems, action.payload)
    },
    clearItemfromCar(state, action){
      state.caritems = clearItem(state.caritems, action.payload)
    },
    setCaropen(state, action){
      state.caropen = action.payload
    },
    reset: ()=>INITIAL_STATE
    
  }  
})

const addCartItem = (caritems, productToadd) => {
  /* primero verificamos si el producto ingresado existe en caritems mediante el metodo fiind el cual
  devuelve un booleano*/
 
  const existingCaritem = caritems.find(
    (caritem) => caritem.id === productToadd.id
  );

  /* aqui verificamos si la funcion existingCaritem retorna un true o un false, se acuerdo a esto se actuali<a el estado de caritem*/
  if (existingCaritem) {
    /* aqui returnamos lo siguiente. si existingCaritem es true, mantenmos todo el caritems y le agregamos una canbtidad*/
    return caritems.map((caritem) =>
      caritem.id === productToadd.id
        ? { ...caritem, quantity: caritem.quantity + 1 }
        : /* aqui returnamos lo siguiente. si existingCaritem es false, mantenemos caritem igual*/
          caritem
    );
  }
  
  /* adicioonalmente si existingCaritem es falso es porque el producto no existe, en ese caso retornamos todo lo que tenia caritems y 
  lse sumamos un nuevo item llamado productToadd y agregamos la cantidad de 1*/
  return [...caritems, { ...productToadd, quantity: 1 }];
};

const removeCartItem = (caritems, carItemtoRemove) => {
  /* primero verificamos si el producto ingresado existe en caritems mediante el metodo fiind el cual
      devuelve un booleano*/
  const existingCaritem = caritems.find(
    (caritem) => caritem.id === carItemtoRemove.id
  );

  if (existingCaritem.quantity === 1) {
    return caritems.filter((caritems) => caritems.id != carItemtoRemove.id);
  }

  /* aqui returnamos lo siguiente. si existingCaritem es true, mantenmos todo el caritems y le agregamos una canbtidad*/
  return caritems.map((caritem) =>
    caritem.id === carItemtoRemove.id
      ? { ...caritem, quantity: caritem.quantity - 1 }
      : /* aqui returnamos lo siguiente. si existingCaritem es false, mantenemos caritem igual*/
        caritem
  );
};

const clearItem = (caritems, carItemtoClear) => {
  return caritems.filter((caritems) => caritems.id != carItemtoClear.id);
};


export const {addItemToCart, removetemToCart,clearItemfromCar, setCaropen, reset} = cartSlice.actions;

export const cartReducer = cartSlice.reducer