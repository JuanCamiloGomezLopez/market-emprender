import styled from "styled-components";
import { Button } from "../../Elements_IU/Buttons";
export function PublicidadTienda() {
  const go_to_preshop = () => {};
  return (
    <Container_Publicidad_tienda>
        <h2 className="title-history">No quieres esperar?</h2>
        <div className="imagen-publicidad-tienda">

        </div>
        <p className="text-publicidad-tienda">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          lemporibus omnis fugit nemo voluptatum quidem nihil optio, fuga sit
          labore dicta totam aperiam. Non accusamus quae quo culpa.samus qu samus qu
        </p>
        <div className="button-content">
            <Button onClick={go_to_preshop} buttonType="amarillo">
        IR A LA TIENDA
      </Button> 
        </div>
     
    </Container_Publicidad_tienda>
  );
}
const Container_Publicidad_tienda = styled.div`
  width: 100%;
  height: 470px;
  padding: 0 0 10px 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color1};
  margin-top: 20px;
  position: relative;
  z-index: 1;
 

  .title-history {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;
    color: white;


  }

  .imagen-publicidad-tienda{
    width: 90%;
    height: 200px;
    background-color: #dfdfdf;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    
  }

  .button-content {
      width: 180px;
      position: absolute;      
      left: 50%;
      transform: translate(-84px);
      bottom: 20px;
    }

    .text-publicidad-tienda{
        text-align: center;
        padding: 0 10px;
        color: #c7c7c7;
    }
`;
