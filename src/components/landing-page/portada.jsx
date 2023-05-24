import styled from "styled-components";
import image5 from "../../assets/market5.jpg";
import { Link } from "react-router-dom";
import { Button } from "../Elements_IU/Buttons";

export function Portada() {
  return (
    <Container>
      <div className="content">
        <h3 className="cursiva">100% Colombianos</h3>
        <h1 className="big-text">
          LA MEJOR MANERA DE <span>AYUDAR</span> RECIBIENDO
        </h1>
        <p className="parrafo-landing-page">
          Somos un espacio virtual creado para nuestros emprendedores donde
          podras descubrir los mejores productos hechos por Colombianos, para
          Colombianos, comprando en Market Up ayudas a miles de familias que se
          reinventan en el mundo emprendedor.
        </p>
        <Link className="container_boton" to="/preventa">
          <Button buttonType="amarillo">VER PREVENTA</Button>
        </Link>
      </div>

      <div className="imagen_container">
        <img className="image_car" src={image5} />

        <Link className="container_boton1" to="/preventa">
          <Button buttonType="amarillo">VER PREVENTA</Button>
        </Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;

  @media (max-width: 760px) {
    flex-direction: column;
    width: 95%;
    padding: 20px 0;
    margin: 0 auto;
    height: auto;
   
  }

  .big-text {
    font-size: 50px;

    @media (max-width: 760px) {
      font-size: 30px;
    }
    span {
      font-size: 60px;
      color: ${(props) => props.theme.color3};
      @media (max-width: 760px) {
        font-size: 45px;
      }
    }
  }

  .content {
    width: 40%;

    @media (max-width: 760px) {
      width: 95%;
      margin: 0 auto;
      margin-top: 20px;
    }
    .cursiva {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${(props) => props.theme.color2};
    }
    .parrafo-landing-page {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 20px;
      @media (max-width: 760px) {
        margin-bottom: 5px;
        margin-top: 10px;
      }
    }

    .container_boton {
      @media (max-width: 760px) {
        display: none;
      }
    }
  }
  .imagen_container {
    width: 52%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 760px) {
      width: 100%;
      margin: 0 auto;
      flex-direction: column;
    }

    .container_boton1 {
      display: none;
      @media (max-width: 760px) {
        display: block;
      }
    }

    .image_car {
      width: 600px;
      border-radius: 10px;

      @media (max-width: 760px) {
        width: 400px;
      }
    }
  }
`;
