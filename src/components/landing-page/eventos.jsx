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
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 120px;
  position: relative;
  overflow-x: hidden;

  .container-flags {
    position: absolute;
    top: 160px;
    left: 20px;
    width: 500px;

    .img-flag {
      width: 800px;
    }
  }

  .content {
    width: 50%;
    margin-left: 80px;

    .market {
      font-size: 40px;
      color: ${(props) => props.theme.color3};
      text-align: center;
      font-weight: 800;
    }

    .text-cursivo {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${(props) => props.theme.color2};
    }

    .container-list {
      margin-top: 30px;

      .subcontainer-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        text-align: left;

        .iconos-shop-section {
          width: 20px;
          height: 20px;
          color: ${(props) => props.theme.color2};
          margin-right: 10px;
        }
      }
      .btn-shop-section {
        display: flex;
        justify-content: flex-start;
        margin-top: 30px;
      }
    }
  }

  .container-imagenes {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-event {
      width: 100%;
    }
  }
`;
