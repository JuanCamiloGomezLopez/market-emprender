import styled from "styled-components";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";
import imagenpreventa from "../../assets/market6.jpg";
import { BsCheckCircleFill } from "react-icons/bs";

export function PreventasSection() {
  return (
    <Container_preventa>
      <div className="imagen_container_preventa">
        <img className="image_car_preventa" src={imagenpreventa} />
        <Link className="btn-preventa-section1" to="/preventa">
          <Button buttonType="default">IR A PREVENTA</Button>
        </Link>
      </div>

      <div className="contenido-preventa-section">
        <h1 className="titulo-preventa-section">SISTEMA DE PREVENTA VIRTUAL</h1>
        <span>MARKET UP</span>
        <h3 className="text-cursivo">100% Colombianos</h3>

        <div className="content">
          <div className="check-container">
            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Descuentos Insuperables solo en MarketUp</h3>
            </div>
            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Las preventas tienen una vida de 7 dias</h3>
            </div>

            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Conoce de cerca tus emprendedores</h3>
            </div>
          </div>

          <div className="check-container">
            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Ayuda a mas de 1200 Emprendedores</h3>
            </div>
            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Compra las 24h al dia los 7 dias de la preventa </h3>
            </div>
            <div className="subcontainer-item">
              <BsCheckCircleFill className="iconos-preventa-section" />
              <h3>Recibe tu producto en tu domicilio rapidamente</h3>
            </div>
          </div>
        </div>

        <Link className="btn-preventa-section" to="/preventa">
          <Button buttonType="default">IR A PREVENTA</Button>
        </Link>
      </div>
    </Container_preventa>
  );
}
const Container_preventa = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 180px;

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 60px;
  }

  .contenido-preventa-section {
    width: 48%;
    @media (max-width: 760px) {
      width: 95%;
      margin: 0 auto;
    }

    .titulo-preventa-section {
      @media (max-width: 760px) {
        font-size: 25px;
        text-align: center;
      }
    }
    span {
      font-size: 40px;
      color: ${(props) => props.theme.color3};
      font-weight: 800;

      @media (max-width: 760px) {
        width: 95%;
        font-size: 30px;
        display: flex;
        justify-content: center;
      }
    }

    .text-cursivo {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${(props) => props.theme.color2};
      @media (max-width: 760px) {        
        text-align: center;
      }
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 760px) {        
       width: 95%;
       margin: 0 auto;
      }

      .check-container {
        width: 45%;
        margin-top: 40px;
        @media (max-width: 760px) {        
          width: 50%;
      }

        .subcontainer-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 20px;

          h3{
            @media (max-width: 760px) {        
            font-size: 12px;
      }
          }

          .iconos-preventa-section {
            width: 25px;
            color: ${(props) => props.theme.color3};
            margin-right: 10px;
          }
        }
      }
    }

    .btn-preventa-section {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      @media (max-width: 760px) {
        display: none;
      }
    }
  }
  .imagen_container_preventa {
    width: 40%;
    @media (max-width: 760px) {
      width: 60%;
      margin: 0 auto;
    }

    .btn-preventa-section1 {
      display: none;
      justify-content: center;
      margin-top: 20px;
      @media (max-width: 760px) {
        display: flex;
      }
    }

    .image_car_preventa {
      width: 100%;
    }
  }
`;
