import styled from "styled-components";
import mujer from "../../assets/viejito.png";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";
import { FormInput } from "../Elements_IU/Form-input";

export function PromocionEventos() {
  const go_to_preshop = () => {};
  return (
    <Container_Promocion>
      <div className="content">
        <h3 className="cursiva">Hey Emprendedores</h3>
        <h1 className="big-text">QUIERES HACER PARTE DE NUESTRA COMUNIDAD EMPRENDEDORA?</h1>
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
  height: 300px;
  background-color: ${(props) => props.theme.color3};
  display: flex;
  margin: 150px 0;

  position: relative;

  .viejito {
    position: absolute;
    top: -194px;
    right: 100px;
    width: 400px;
    height: auto;
    object-fit: cover;
  }

  .content {
    width: 60%;
    margin: auto 0;
    margin-left: 150px;

    .inputs {
      border: 1px solid rgb(202, 202, 202);
      padding: 0 8px;
      height: 45px;
      border-radius: 8px;
      width: 50%;
      font-size: 0.7em;
      
      background-color: white;
      color: #4e4e4e;

      &:focus {
        border: none;
        outline: 1px solid rgb(179, 186, 255);
      }
    }

    .cursiva {
      font-family: "Dancing Script", cursive;
      font-size: 23px;
      margin-bottom: 10px;
      
      color: ${(props) => props.theme.color2};
    }

    .big-text {
      font-size: 45px;
      color: ${(props) => props.theme.color1};
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
     
    }
  }
`;
