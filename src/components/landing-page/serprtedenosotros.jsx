import styled from "styled-components";
import mujer from "../../assets/viejito.png";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";
import { FormInput } from "../Elements_IU/Form-input";

export function Partedenosotros() {
  const go_to_preshop = () => {};
  return (
    <Container_Promocion>
      <div className="content">
        <h3 className="cursiva">Hey Emprendedores</h3>
        <h1 className="big-text">QUIERES VER DESPEGAR TUS VENTAS?</h1>
        <p className="parrafo-nosotros">
          Sé parte de nosotros, y preparate para ver crecer tu negocio.
        </p>
        <div className="container_boton">
          <input
            className="inputs"
            placeholder="Ingrese Email"
            name="email"
          ></input>

          <Link to="/preventa">
            <Button buttonType="default">QUIERO SER PARTE</Button>
          </Link>
        </div>
      </div>
      <img className="viejito" src={mujer} />
    </Container_Promocion>
  );
}
const Container_Promocion = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color3};
  display: flex;
  margin-top: 40px;
  position: relative;
  padding: 40px 0;

  .viejito {
    position: absolute;
    top: -194px;
    right: 100px;
    width: 400px;
    height: auto;
    object-fit: cover;

    @media (max-width: 760px) {
      display: none;
    }
  }

  .content {
    width: 50%;
    margin: auto 0;
    margin-left: 200px;

    @media (max-width: 760px) {
      width: 95%;
      margin: 0 auto;
    }

    .cursiva {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      color: ${(props) => props.theme.color5};

      @media (max-width: 760px) {
        color: ${(props) => props.theme.color2};
      }
    }

    .big-text {
      font-size: 45px;
      color: ${(props) => props.theme.color1};
      @media (max-width: 760px) {
        font-size: 30px;
      }
    }
    .parrafo-nosotros {
      margin-top: 10px;
      font-size: 13px;
      color: ${(props) => props.theme.color1};
      margin-bottom: 20px;
    }

    .container_boton {
      width: 60%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 760px) {
        width: 100%;
      }
      .inputs {
        border: 1px solid rgb(202, 202, 202);
        padding: 0 8px;
        height: 45px;
        border-radius: 8px;
        width: 50%;
        font-size: 0.7em;
        background-color: white;
        color: #4e4e4e;
        @media (max-width: 760px) {
          width: 70%;
        }

        &:focus {
          border: none;
          outline: 1px solid rgb(179, 186, 255);
        }
      }
    }
  }
`;
