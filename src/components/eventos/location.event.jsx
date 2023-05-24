import styled from "styled-components";
import { Logo } from "../Elements_IU/Logo";
export function Location() {
  return (
    <ContainerLocation>
      <div className="subcontainerlocation">
        <h1 className="title-location">Encuentra nuestra feria Market Up</h1>
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

  .subcontainerlocation {
    width: 100%;
    position: relative;

    @media (max-width: 760px) {
    }

    .title-location {
      text-align: center;
      color: ${(props) => props.theme.color1};
      padding: 40px 0;

      @media (max-width: 760px) {
        font-size: 30px;
        padding: 40px 0 20px 0;
      }
    }

    .subcontentlocation {
      width: 100%;
      height: 350px;
      display: flex;
      align-items: center;
  

      @media (max-width: 760px) {
        flex-direction: column-reverse;
       
        height: auto;
      }

      .content-location {
        width: 40%;
        background-color: #242424da;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        margin-left: 40px;
        border-radius: 20px;
        padding: 30px;
        position: absolute;

        @media (max-width: 760px) {
          width: 90%;
          margin: 0 auto;
          margin-top: 20px;
          padding: 15px;
          border-radius: 5px;
          position: relative;
        }

        .container-content {
          width: 100%;
          height: 100%;
          border: 1px solid ${(props) => props.theme.color3};
          border-radius: 10px;
          padding: 0 40px;
          line-height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          @media (max-width: 760px) {
            padding: 0 10px;
            border-radius: 5px;
            padding: 0 10px;
          }

          .texto-line {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .texth2 {
              color: white;
              font-weight: 400;
              font-size: 15px;

              @media (max-width: 760px) {
                font-size: 13px;
                font-weight: 300;
              }
            }
          }
        }
      }

      .container-map {
        width: 100%;
        height: 100%;
        position: relative;
       
        z-index: 0;

        @media (max-width: 760px) {
          position: relative;
          width: 100%;
        }

        .mapa {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
