import styled from "styled-components";
import imagen1 from "../../assets/market2.jpg";
import flags from "../../assets/flags.jpg";
import { Link } from "react-router-dom";
import { Button } from "../Elements_IU/Buttons";
import { BsCheckCircleFill } from "react-icons/bs";

export function Eventos() {
  return (
    <Container>
      <div className="container-flags">
        <img className="img-flag" src={flags}></img>
      </div>
      <div className="content">
        <h1 className="titulo-preventa-section">FERIAS DE EMPRENDIMIENTO</h1>
        <span className="market">MARKET UP</span>
        <h3 className="text-cursivo">100% Colombianos</h3>

        <div className="container-list">
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Ferias de emprendimiento para emprendedores de market up</h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Stand típico para cada emprendedor </h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Bonos de regalo para nuestros clientes</h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Productos de emprendedores 100% Colombianos</h3>
          </div>
          <Link className="btn-shop-section" to="/preventa">
            <Button buttonType="amarillo">CONOCE NUESTRA PROGRAMACIÓN</Button>
          </Link>
        </div>
      </div>

      <div className="container-imagenes">
        <img className="img-event" src={imagen1}></img>
        <Link className="btn-shop-section1" to="/preventa">
          <Button buttonType="amarillo">VER PROGRAMACIÓN</Button>
        </Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 120px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 0;
    margin-top: 50px;
  }

  .container-flags {
    position: absolute;
    top: 160px;
    left: 20px;
    width: 500px;

    @media (max-width: 760px) {
      position: relative;
      width: 420px;
      top: 0;
      margin-bottom: 10px;
    }

    .img-flag {
      width: 800px;
    }
  }

  .content {
    width: 50%;
    margin-left: 80px;
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

    @media (max-width: 760px) {
      width: 100%;
    }

    .market {
      font-size: 40px;
      color: ${(props) => props.theme.color3};
      text-align: center;
      font-weight: 800;
      @media (max-width: 760px) {
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
        margin-top: 10px;
      }
    }

    .container-list {
      margin-top: 30px;

      @media (max-width: 760px) {
        width: 85%;
        margin: 0 auto;
        margin-top: 20px;
      }

      .subcontainer-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        text-align: left;
        h3 {
          @media (max-width: 760px) {
            font-size: 12px;
          }
        }

        .iconos-shop-section {
          width: 20px;
          height: 20px;
          color: ${(props) => props.theme.color2};
          margin-right: 10px;
          @media (max-width: 760px) {
            color: ${(props) => props.theme.color3};
            idth: 15px;
            height: 15px;
          }
        }
      }
      .btn-shop-section {
        display: flex;
        justify-content: flex-start;
        margin-top: 30px;
        @media (max-width: 760px) {
          display: none;
        }
      }
    }
  }

  .container-imagenes {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 760px) {
      flex-direction: column;
    }

    .btn-shop-section1 {
      display: none;
      justify-content: flex-start;
      margin-top: 30px;
      @media (max-width: 760px) {
        display: flex;     
      }
    }

    .img-event {
      width: 100%;
    }
  }
`;
