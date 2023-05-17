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
          <h1 className="big-text">Descuentos de hasta <span>30%</span> en nuestras increibles preventas</h1>
          <p>
            Ahorrando ayudas a nuestros emprendedores !!!
          </p>
          <div className="container_boton">
            <Link to="/preventa">
             
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
    margin-top: 10px;
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
      p{
        margin-top: 20px;
        font-size: 15px;
      }

      .cursiva {
        font-family: "Dancing Script", cursive;
        font-size: 23px;       
        color: ${(props) => props.theme.color1};
      }

      .big-text {
        font-size: 45px;
        

        span{
          font-size: 60px;
        }
      }

      .container_boton {
        width: 170px;
        margin-top: 20px;
      }
    }
   

`;