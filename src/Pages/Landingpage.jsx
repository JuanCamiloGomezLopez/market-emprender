import styled from "styled-components";
import { Portada } from "../components/landing-page/portada";
import { PreventasSection } from "../components/landing-page/preventas";
import { TiendaSection } from "../components/landing-page/tiendavirtual-section";
import { Eventos } from "../components/landing-page/eventos";
import { Partedenosotros } from "../components/landing-page/serprtedenosotros";
import { Comienza } from "../components/landing-page/comienza";
import { Footer } from "../components/Preventa/footer/footer";
import { NavbarComponent } from "../components/Elements_IU/navbarcomponent/Navbar.tipico";

export function Landingpage() {
  return (
    <Container_landing>
      <div className="navbar-container">
        <NavbarComponent type="landing" />
      </div>
      <Portada />
      <PreventasSection />
      <TiendaSection />
      <Eventos />
      <Partedenosotros />
      <Comienza />
      <Footer />
    </Container_landing>
  );
}
const Container_landing = styled.div`
  width: 100%;

  position: relative;

  .navbar-container {
    width: 100%;
    height: 80px;
  }
`;
