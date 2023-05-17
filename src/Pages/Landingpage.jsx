import styled from "styled-components";
import { Navbar } from "../components/navbar/Navbar";
import { Portada } from "../components/landing-page/portada";
import { PreventasSection } from "../components/landing-page/preventas";
import { TiendaSection } from "../components/landing-page/tiendavirtual-section";
import { Eventos } from "../components/landing-page/eventos";
import { Partedenosotros } from "../components/landing-page/serprtedenosotros";
import { Comienza } from "../components/landing-page/comienza";
import { Footer } from "../components/Preventa/footer/footer";
import { Promocion2 } from "../components/landing-page/promocion2";
import { PreventasSection_copy } from "../components/landing-page/preventas copy";

export function Landingpage() {
  return (
    <Container_landing>
      <Navbar />
      <Portada />
      <PreventasSection_copy />
      <PreventasSection />
      <TiendaSection />
      <Eventos />
      <Partedenosotros />
      <Comienza />
      <Promocion2 />
      <Footer />
    </Container_landing>
  );
}
const Container_landing = styled.div`
  width: 100%;
  
  position: relative;

`;
