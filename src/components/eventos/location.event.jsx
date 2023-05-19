import styled from "styled-components";
import { Logo } from "../Elements_IU/Logo";
export function Location() {
  return (
    <ContainerLocation>
      <div className="subcontainerlocation">
        <h1 className="title-location">ENCUENTRA NUESTRA FERIA PARA TI</h1>
        <div className="subcontentlocation">
          <div className="content-location">
            <div className="container-content">
  
              <div className="texto-line">
                <h2 className="texth2">
                  <strong>Ubicación</strong>
                </h2>
                <h2 className="texth2">Colegio Mayor de Antioquia</h2>
              </div>
              <div className="texto-line">
                <h2 className="texth2">
                  <strong>Dirección</strong>
                </h2>
                <h2 className="texth2">Carrera 72B # 56-25</h2>
              </div>
              <div className="texto-line">
                <h2 className="texth2">
                  <strong>Fecha</strong>
                </h2>
                <h2 className="texth2">14 de Junio de 2023</h2>
              </div>
              <div className="texto-line">
                <h2 className="texth2">
                  <strong>Hora</strong>
                </h2>
                <h2 className="texth2">Desde las 8:00AM hasta las 5:00pm</h2>
              </div>
            </div>
          </div>

          <div className="container-map">
            <img className="mapa" src="https://i.ibb.co/qWqvb90/mapa.jpg" />
          </div>
        </div>
      </div>
    </ContainerLocation>
  );
}
const ContainerLocation = styled.div`
  width: 100%;
  height: 400px;

  .subcontainerlocation {
    height: 100%;
    width: 100%;
    position: relative;

    .title-location {
      text-align: center;
      color: ${(props) => props.theme.color1};
      padding: 40px 0;
    }

    .subcontentlocation {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      position: absolute;

      .content-location {
        width: 40%;
        height: 80%;
        background-color: #242424da;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        margin-left: 40px;
        border-radius: 20px;
        padding: 30px;

        .container-content {
          width: 100%;
          height: 100%;
          border: 1px solid ${(props) => props.theme.color3};
          border-radius: 10px;
          padding:  40px;

          .texto-line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;

            .texth2 {
              color: white;
              font-weight: 400;
            }
          }
        }
      }

      .container-map {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;

        .mapa {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
