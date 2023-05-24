import styled from "styled-components";
import { Actividades } from "./actividades.component";
import { InformacionEventos } from "./Informacion.eventos";
import { Location } from "./location.event";
import { Participantes } from "./participantes";
import { Questions } from "../Preventa/Preguntas/questions";
import { Footer } from "../Preventa/footer/footer";
import { PromocionEventos } from "./promoción.eventos";

export function EventSingle() {
  return (
    <Container_single>
      <h1 className="title-single">Actividades Market Up</h1>
      <Actividades />
      <InformacionEventos />
      <Participantes />
      <PromocionEventos />
      <Location />
      <Questions />
      <Footer />
    </Container_single>
  );
}
const Container_single = styled.div`
  width: 100%;

  .title-single {
    margin-top: 50px;
    text-align: center;

    @media (max-width: 760px) {
      margin: 0;   
      margin-top: 150px;
      margin-bottom: 30px;
    }
  }
`;
