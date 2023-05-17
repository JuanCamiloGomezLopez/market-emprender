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

export function Myroutes() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    const getlistUserMap = async () => {
      const listaarray = await getlisUserAndDocuments();
      dispatch(setListUser(listaarray));
    };
    getlistUserMap();
  }, []);

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
      </Routes>
    </BrowserRouter>
  );
}
