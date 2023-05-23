import styled from "styled-components";
import { Button } from "../Elements_IU/Buttons";
import { ButtonCar } from "../Elements_IU/Buttons-car";

export function ItemproductEnvio({ item, caritemsMap }) {
  return (
    <Container>
      <h4 className="title-container">
        <strong>{item}</strong>
      </h4>

      <div className="subcontainer-info-envio">
        <div className="container-imagenes">
          {caritemsMap.map((producto) => {
            if (producto.emprendimiento === item) {
              return (
                <div className="imagenes" key={producto.id}>
                  <img className="img-datos-envio" src={producto.imageUrl} />
                  <h6 className="titulo-producto">
                    <strong>{producto.producto}</strong>
                  </h6>
                </div>
              );
            }
          })}
        </div>
        <div className="help-responsive3">
          <div className="direccion">
            <h6>
              <strong>Dirección de envío</strong>: Dirección Principal
            </h6>
            <div className="btn-cambio-direccion">
              <ButtonCar buttonType="amarillo">Cambiar dirección</ButtonCar>
            </div>
          </div>
          <div className="costo-envio">
            <h6> Costo de envío </h6>
            <h5 className="price">
              <strong>3.7k</strong>
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 760px) {
    height: auto;
  }

  .title-container {
    margin-left: 10px;
    padding: 5px 0;
  }

  .subcontainer-info-envio {
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 760px) {
      display: block;
    }

    .container-imagenes {
      width: 60%;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #f0f0f0;      
      margin-left: 10px;
      overflow-x: hidden;

      @media (max-width: 760px) {
        width: 95%;
        background-color: white;
        padding: 10px 0 20px 0;
        border-bottom: 1px solid rgb(218, 218, 218);
        margin-bottom: 5px;
      }

      .imagenes {
        max-width: 20%;
        height: 60px;
        margin-right: 10px;
        text-align: center;

        .img-datos-envio {
          width: 100%;
          height: 80%;
          object-fit: cover;
          border-radius: 5px;
        }
        .titulo-producto {
          white-space: nowrap;
          overflow-x: hidden;
        }
      }
    }

    .help-responsive3 {
      width: 40%;
      display: flex;
      padding: 0 20px;

      @media (max-width: 760px) {
        width: 100%;
        padding: 10px;
      }

      .direccion {
        width: 75%;
        line-height: 18px;
        margin-right: 20px;



        .btn-cambio-direccion {
          margin-top: 10px;
        }
      }

      .costo-envio {
        width: 25%;
        text-align: center;
        margin: 0 auto;
        line-height: 20px;

        .price {
          font-size: 18px;
          margin-top: 10px;
        }
      }
    }
  }
`;
