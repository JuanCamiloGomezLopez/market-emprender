import styled from "styled-components";
import { TextPortada } from "../components/eventos/contenidovisualportada";
import { EventSingle } from "../components/eventos/event.single";
import { NavbarComponent } from "../components/Elements_IU/navbarcomponent/Navbar.tipico";


export function EventosPage() {
  return (
    <Container_eventos_page>
      <NavbarComponent />
      <div className="imagen">
        <img
          className="img-fondo"
          src="https://i.ibb.co/h9YBJsf/IMG-20171121-WA0009.jpg"
        ></img>
      </div>
      <TextPortada />

      <div className="boxes">
        <div className="fecha">
            <h1 className="dia">28</h1>
            <h2 className="mes">Mayo</h2>
        </div>
        <div className="fecha">
            <h1 className="dia">06</h1>
            <h2 className="mes">Junio</h2>
        </div>
        <div className="fecha-active">
            <h1 className="dia-active">14</h1>
            <h2 className="mes-active">Junio</h2>
        </div>
        <div className="fecha">
            <h1 className="dia">02</h1>
            <h2 className="mes">Julio</h2>
        </div>

      </div>

      <EventSingle />
     
    </Container_eventos_page>
  );
}
const Container_eventos_page = styled.div`
  width: 100%;
  
  .imagen {
    position: relative;
    width: 100%;
    height: 500px; 

    &::before {
      content: "";
      width: 100%;
      height: 500px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      @media (max-width: 760px){
        background-color: rgba(0, 0, 0, 0.4);
    }
    }
    .img-fondo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .boxes{
    width: 660px;
    height: 140px; 
    position: absolute;
    right: 0;
    top: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 760px){
      width: 100%;
    }

    .fecha{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #ccbe6d;
        cursor: pointer;
        background-color: ${(props) => props.theme.color3};       
    }

    .fecha-active{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #ccbe6d;
        cursor: pointer;
        background-color: white;      
    }

    .dia{
        color: white;
        font-size: 40px;
    }
    .mes{
        color: white;
    }
    .dia-active{
        color: ${(props) => props.theme.color1};
        font-size: 40px;
    }
    .mes-active{
        color: ${(props) => props.theme.color1};
    }
  }
`;
