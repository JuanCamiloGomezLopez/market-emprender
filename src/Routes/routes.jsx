import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landingpage } from "../Pages/Landingpage";
import { PreventaPage_1 } from "../Pages/preventa.page_1";
import { DetailProduct } from "../Pages/detail.product";
import { Checkout } from "../Pages/checkout.page";
import { HistoriaEmprendedor } from "../Pages/historia.emprendedor";
import { Tienda } from "../Pages/tienda.virtual";
import { PreventaPage } from "../Pages/preventa.page";
import { PagosProducto } from "../Pages/payment.page";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getlisUserAndDocuments,
} from "../utils/firebase.utils";
import { setCurrentUser } from "../store/user/user.reduce";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserProfile } from "../Pages/user.page";
import { setListUser } from "../store/user/user.reduce";
import { selectListUser } from "../store/user/user.selector";
import { setproductfavorite } from "../store/favorites/favorite.reduce";
import { useSelector } from "react-redux";
import { EventosPage } from "../Pages/eventos.page";

export function Myroutes() {
  const currentuser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const listuser = useSelector(selectListUser);

  // ESCUCHAMOS CUANDO UN USUARIO DSE LOGEA Y LO GUARDAMOS EN EL ESTADO CURRENTUSER
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user &&
        (({ accessToken, email, displayName }) => ({
          accessToken,
          email,
          displayName,
        }))(user);
      dispatch(setCurrentUser(pickedUser));
    });
    return unsubscribe;
  }, []);

  // RECOLECTAMOS TODOS LOS USUARIOS
  useEffect(() => {
    const getlistUserMap = async () => {
      const listaarray = await getlisUserAndDocuments();
      dispatch(setListUser(listaarray));
    };
    getlistUserMap();
  }, []);

  // RECOLECTAMOS LOS PRODUCTOS FAVORITOS DEL USUARIO LOGEADO
  useEffect(() => {
    const getproducts = async () => {
      if (currentuser) {
        listuser.map((item) => {
          if (item.email === currentuser.email) {
            dispatch(setproductfavorite(item));
          }
        });
      }
    };
    getproducts();
  }, [dispatch, listuser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/preventa_copy" element={<PreventaPage_1 />} />
        <Route path="/preventa" element={<PreventaPage />} />
        <Route path="/product" element={<DetailProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/historias" element={<HistoriaEmprendedor />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/pasarela_pagos" element={<PagosProducto />} />
        <Route path="/profile/*" element={<UserProfile />} />
        <Route path="/events" element={<EventosPage />} />

      </Routes>
    </BrowserRouter>
  );
}
