import styled from "styled-components";
import mujer from "../../assets/mujersonriendo.png";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";

export function PromocionPreventa() {
  const go_to_preshop = () => {};
  return (
    <Container_Promocion>
      <div className="content">
        <h3 className="cursiva">Hey Colombianos</h3>
        <h1 className="big-text">
          Descuentos de hasta <span>30%</span> en nuestras increibles preventas
        </h1>
        <p>Ahorrando ayudas a nuestros emprendedores !!!</p>
        <div className="container_boton">
          <Link to="/preventa"></Link>
        </div>
      </div>
      <div className="container-mujer">
        <img className="mujer" src={mujer} />
      </div>
    </Container_Promocion>
  );
}
const Container_Promocion = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.color3};
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 760px) {
     height: 250px;
    }

  .container-mujer {
    width: 50%;
    height: 100%;
    margin-right: 120px;

    @media (max-width: 760px) {
        display: none;
        
      }

    .mujer {
      width: 100%;
      height: 100%;
      object-fit: cover;     
    }
  }

  .content {
    width: 50%;
    height: 100%;
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 760px) {
      width: 100%;
      margin-left: 20px;
      margin-right: 20px;   
    }

    p {
      margin-top: 20px;
      font-size: 15px;
      @media (max-width: 760px) {
        font-size: 12px;
      }
    }

    .cursiva {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      color: ${(props) => props.theme.color1};
      margin-bottom: 10px;
    }

    .big-text {
      font-size: 45px;
      @media (max-width: 760px) {
        font-size: 30px;
      }

      span {
        font-size: 60px;
        @media (max-width: 760px) {
          font-size: 40px;
        }
      }
    }

    .container_boton {
      width: 170px;
      margin-top: 20px;
    }
  }
`;
