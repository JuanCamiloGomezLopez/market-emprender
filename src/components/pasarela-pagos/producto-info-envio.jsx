import styled from "styled-components";
import { Button } from "../Elements_IU/Buttons";
import { ButtonCar } from "../Elements_IU/Buttons-car";

export function ItemproductEnvio({ item, caritemsMap }) {
  console.log(caritemsMap);
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
                <div className="imagenes">
                  <img className="img-datos-envio" src={producto.imageUrl} />
                  <h6 className="titulo-producto">
                    <strong>{producto.producto}</strong>
                  </h6>
                </div>
              );
            }
          })}
        </div>
        <div className="direccion">
          <h6>
            <strong>Dirección de envío</strong>: Carrera 58 No. 45-25{" "}
          </h6>
          <h6>
            <strong>Departamento / Ciudad</strong>: Antioquia - Medellin
          </h6>
          <h6>
            <strong>Observaciones</strong>: Unidad Montecarmelo Apto 107 torre 1 Cerca al smart
          </h6>
        </div>
        <div className="cambio-direccion">
        <h6> Costo de envío  </h6>
        <h5 className="price"><strong>3.7k</strong></h5>

          <div className="btn-cambio-direccion">
            <ButtonCar  buttonType="amarillo">Cambiar dirección</ButtonCar>
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


  .title-container {
    margin-left: 10px;
    padding: 5px 0;
  }

  .subcontainer-info-envio {
    width: 100%;
    display: flex;
    align-items: center;
   

    .container-imagenes {
      width: 50%;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #f0f0f0;
      border-radius: 5px;
      margin-left: 10px;
      overflow-x: hidden;

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

    .direccion {
      width: 30%;
      margin-left: 20px;
      line-height: 18px;
      margin-right: 20px;

    }

    .cambio-direccion{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
      

        .btn-cambio-direccion{
            margin-top: 5px;
            
        }

        .price{
            
        }
    }
  }
`;
