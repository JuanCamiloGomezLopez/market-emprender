import styled from "styled-components";
import { Programacion } from "../components/Preventa/Info_preventa/Programacion";
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
import { getCategoriesAndDocuments, getlistemprendedoresAndDocuments } from "../utils/firebase.utils";
import { PromocionPreventa } from "../components/Preventa/promocion-preventa";
import { NavbarComponent } from "../components/Elements_IU/navbarcomponent/Navbar.tipico";

export function PreventaPage_1() {

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
        <NavbarComponent />
        <PromocionPreventa />     

      <div className="subcontainer">       
        <div className="container-left">
          <div className="left-center-container">
            <div className="left-container">
              <Opiniones />
              <PublicidadTienda />
            </div>
            <div className="center-container">
            <Programacion />
            </div>
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
  height: 1200px;

  .portada-preventa{
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.theme.color4};
    display: flex;
    align-items: center;
    justify-content: center;
   
    position: relative;
    z-index: 0;

    .titleportada{
         color: #000000;
         z-index: 10;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        z-index: 0;
    }
  }

  .subcontainer {
    width: 100%;
    display: flex;

    .container-left {
      width: 80%;
      height: 100%;

    

      .left-center-container {
        width: 100%;
        height: 100%;
        display: flex;

        .left-container {
          width: 20%;
          height: 100%;
          padding: 0 10px 10px 20px;

        }

        .center-container {
          width: 80%;
        }
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
