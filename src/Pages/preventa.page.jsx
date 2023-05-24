import styled from "styled-components";
import { Programacion } from "../components/Preventa/Info_preventa/Programacion";
import { Carrito } from "../components/Preventa/Descuento-carrito/carrito";
import { Historias } from "../components/Preventa/Descuento-carrito/historias";
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
import { NavbarComponent } from "../components/Elements_IU/navbarcomponent/Navbar.tipico";

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
       <div className="navbar-container">
        <NavbarComponent type="preventa"/>
      </div>
      <PromocionPreventa />

      <div className="subcontainer-preventa">
        <Programacion />
        <div className="container-right">
          <Carrito />
          <Historias />
        </div>
      </div>
      <div className="questions">
        <Questions />
      </div>

      <Footer />
    </Container_Preventa>
  );
}
const Container_Preventa = styled.div`
  width: 100%;
  overflow-x: hidden;

  .navbar-container {
    width: 100%;
    height: 80px;
  }

  .subcontainer-preventa {
    width: 100%;
    display: flex;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    .container-right {
      width: 20%;
      padding: 20px;

      @media (max-width: 760px) {
        width: 100%;
        background-color: ${(props) => props.theme.color3};
      }
    }
  }
  .questions {
    width: 100%;
    padding: 30px 40px;

    @media (max-width: 760px) {
      padding: 0 10px;
    }
  }
`;
