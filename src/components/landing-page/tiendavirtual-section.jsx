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
          <Link className="btn-shop-section" to="/preventa">
            <Button buttonType="default">IR A TIENDA</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.color3};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .container-image-shop {
    width: 700px;
    height: 700px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;

    .img-shop {
      width: 80%;
      border-radius: 50%;
    }
  }

  .content-shop {
    text-align: center;
    margin-right: 50px;

    .titulo-preventa-section {
    }

    .market {
      font-size: 40px;
      color: ${(props) => props.theme.color2};
      text-align: center;
      font-weight: 800;
    }

    .text-cursivo {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${(props) => props.theme.color4};
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
          color: ${(props) => props.theme.color4};
          margin-right: 10px;
        }
      }
      .btn-shop-section {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
`;
