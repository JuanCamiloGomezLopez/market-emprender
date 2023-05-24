import styled from "styled-components";
import imagen_shop from "../../assets/commerce.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";

export function TiendaSection() {
  return (
    <Container>
      <div className="container-image-shop">
        <img className="img-shop" src={imagen_shop}></img>
        <Link className="btn-shop-section1" to="/tienda">
          <Button buttonType="default">IR A TIENDA</Button>
        </Link>
      </div>

      <div className="content-shop">
        <h1 className="titulo-preventa-section">TIENDA VIRTUAL E-COMMERCE</h1>
        <span className="market">MARKET UP</span>
        <h3 className="text-cursivo">100% Colombianos</h3>

        <div className="container-list">
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Pagos con todas las tarjetas de crédito</h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Seguridad cifrada en cada transacción </h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Disponibilidad 24 horas los 7 dias de la semana</h3>
          </div>
          <div className="subcontainer-item">
            <BsCheckCircleFill className="iconos-shop-section" />
            <h3>Productos de emprendedores 100% Colombianos</h3>
          </div>
          <Link className="btn-shop-section" to="/tienda">
            <Button buttonType="default">IR A TIENDA</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color3};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    padding: 0;
    background-color: white;
  }

  .container-image-shop {
    width: 450px;
    height: 450px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;

    @media (max-width: 760px) {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      flex-direction: column;
      margin: 0 auto;
    }
    .btn-shop-section1 {
      display: none;
      justify-content: center;
      margin-top: 20px;
      @media (max-width: 760px) {
        display: flex;
      }
    }

    .img-shop {
      width: 100%;
      border-radius: 50%;
    }
  }

  .content-shop {
    text-align: center;
    margin-right: 50px;
    @media (max-width: 760px) {
      margin: 0 auto;
    }
    .titulo-preventa-section {
      @media (max-width: 760px) {
        font-size: 25px;
        text-align: center;
      }
    }

    .market {
      font-size: 40px;
      color: ${(props) => props.theme.color2};
      text-align: center;
      font-weight: 800;
      @media (max-width: 760px) {
        font-size: 30px;
      }
    }

    .text-cursivo {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${(props) => props.theme.color4};
      @media (max-width: 760px) {
      }
    }
    .container-list {
      margin-top: 30px;
      @media (max-width: 760px) {
        width: 95%;
            margin-top: 0;
            margin: 0 auto;
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
          color: ${(props) => props.theme.color4};
          margin-right: 10px;
          @media (max-width: 760px) {
            color: ${(props) => props.theme.color3};
            width: 15px;
          height: 15px;
          }
        }
      }
      .btn-shop-section {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        @media (max-width: 760px) {
          display: none;
        }
      }
    }
  }
`;
