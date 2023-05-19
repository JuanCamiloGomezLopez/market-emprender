import styled from "styled-components";
import { RedSocial } from "./redsocial";
export function TextPortada() {
  return (
    <Container>
      <h3 className="cursiva">100% Colombianos</h3>
      <h1 className="big-text-event">
        CONSTRUYENDO SUEÑOS <span>EMPRENDEDORES</span>
      </h1>
      <p className="parrafo-event">
        Somos un espacio virtual creado para nuestros emprendedores donde podras
        descubrir los mejores productos hechos por Colombianos, para
        Colombianos, comprando en Market Up ayudas a miles de familias que se
        reinventan en el mundo emprendedor.
      </p>
      <RedSocial />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 40%;
  top: 200px;
  left: 100px;

  .cursiva {
    font-family: "Dancing Script", cursive;
    font-size: 23px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.color2};
  }
  .big-text-event {
    font-size: 40px;
    color: white;
    margin-bottom: 10px;
  }
  .parrafo-event {
    color: #dadada;
    margin-bottom: 30px;
  }
`;
