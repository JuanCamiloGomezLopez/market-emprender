import styled from "styled-components";
import { Programacion } from "../components/Preventa/Info_preventa/Programacion";
import { Navbar_Preventa } from "../components/Preventa/Navbar_preventa/navbar_preventa";
import { Carrito } from "../components/Preventa/Descuento-carrito/carrito";
import { Historias } from "../components/Preventa/Descuento-carrito/historias";
import { Opiniones } from "../components/Preventa/Opiniones-tienda/opiniones";
import { PublicidadTienda } from "../components/Preventa/Opiniones-tienda/publicidadtienda";
import { Questions } from "../components/Preventa/Preguntas/questions";
import { Footer } from "../components/Preventa/footer/footer";
import { useDispatch } from "react-redux";
import { setPreventa } from "../store/Preventa/preventa.reducer";
import { setEmprenderlist } from "../store/emprendimientos-list/list.reducer";
import { useEffect } from "react";
import {
  getCategoriesAndDocuments,
  getlistemprendedoresAndDocuments,
} from "../utils/firebase.utils";
import { PromocionPreventa } from "../components/Preventa/promocion-preventa";
import { Authentication } from "../components/modales/modal-authentication";

export function PreventaPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getpreventamap = async () => {
      const preventaarray = await getCategoriesAndDocuments();
      dispatch(setPreventa(preventaarray));
    };
    getpreventamap();
  }, []);

  useEffect(() => {
    const getlistemprendedoresMap = async () => {
      const listaarray = await getlistemprendedoresAndDocuments();
      dispatch(setEmprenderlist(listaarray));
    };
    getlistemprendedoresMap();
  }, []);

  return (
    <Container_Preventa>
      <Navbar_Preventa />
      
      <PromocionPreventa />

      <div className="subcontainer-preventa">
        <div className="container-left">
          <div className="center-container">
            <Programacion />
          </div>
        </div>

        <div className="container-right">
          <Carrito />
          <Historias />
        </div>
      </div>

      <div className="questions">
        <Questions />
      </div>
      <div className="footer">
        <Footer />
      </div>

    </Container_Preventa>
  );
}
const Container_Preventa = styled.div`
  width: 100%;
  height: 100%;

  .subcontainer-preventa {
    width: 100%;
    display: flex;

    .container-left {
      width: 80%;
      height: 100%;

      .center-container {
        width: 90%;
        margin: 0 auto;
      }
    }
    .container-right {
      width: 20%;
      height: calc(100% + 80px);
      background-color: #eeeeee;
      padding: 20px;
    }
  }
  .questions {
    width: 100%;
    height: 400px;
    padding: 30px 40px;
  }

  .footer {
    width: 100%;
    height: 400px;
  }
`;
