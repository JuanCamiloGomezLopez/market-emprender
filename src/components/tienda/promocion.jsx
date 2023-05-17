import styled from "styled-components";
import mujer from "../../assets/mujersonriendo.png";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";


export function Promocion() {
    const go_to_preshop = () => {};
 return ( 
<Container_Promocion>

        <div className="content">
          <h3 className="cursiva">Hey Colombianos</h3>
          <h1 className="big-text">Que esperas para unirte a Emprender?</h1>
          <p>
            Recibiras toda la asesoria para unirte a la unica comunidad de
            emprendedores del pais
          </p>
          <div className="container_boton">
            <Link to="/preventa">
              <Button onClick={go_to_preshop} buttonType="default">
                VER PREVENTA
              </Button>
            </Link>
          </div>
        </div>
        <img className="mujer" src={mujer} />
      
</Container_Promocion>
);
}
const Container_Promocion = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${(props) => props.theme.color3};
    display: flex;
    margin-top: 40px;
    justify-content: center;

    .mujer {
      width: 50%;
      height: auto;
      object-fit: cover;
      margin-right: 120px;
    }

    .content {
      width: 50%;
      margin: auto 0;
      margin-left: 200px;
      .cursiva {
        font-family: "Dancing Script", cursive;
        font-size: 23px;
        margin-bottom: 10px;
        color: ${(props) => props.theme.color1};
      }

      .big-text {
        font-size: 45px;
      }

      .container_boton {
        width: 170px;
        margin-top: 20px;
      }
    }
  

`;