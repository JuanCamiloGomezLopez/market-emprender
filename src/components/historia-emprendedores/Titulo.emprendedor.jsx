import styled from "styled-components";
import { Fragment } from "react";
export function TituloEmprendedor({ infoemprendimiento }) {
  return (
    <Container_titulo_emprendedor>
      {infoemprendimiento.map((item) => (

        <Fragment key={item.id}>

             <div className="description-container">
            <h1 className="title-description">{item.emprendimiento}</h1>
            <h6 className="parrafo">{item.descripccion}</h6>
          </div>

          <div className="content-container">
            <div className="texthorizontal">
              <h5>
                <strong>Categoria:</strong>
              </h5>
              <h5>{item.categoria}</h5>
            </div>
            <div className="linea"></div>
            <div className="texthorizontal">
              <h5>
                <strong>Ciudad:</strong>
              </h5>
              <h5>{item.ciudad}</h5>
            </div>
            <div className="linea"></div>
            <div className="texthorizontal">
              <h5>
                <strong>Opiniones:</strong>
              </h5>
              <h5>{item.opiniones}</h5>
            </div>
            <div className="linea"></div>
            <div className="texthorizontal">
              <h5>
                <strong>Likes:</strong>
              </h5>
              <h5>{item.likes}</h5>
            </div>
          </div>
        </Fragment>
        


      ))}
    </Container_titulo_emprendedor>
  );
}
const Container_titulo_emprendedor = styled.div`
  width: 70%;
  height: 280px;
  background-color: #ffffff;
  position: absolute;
  border-radius: 10px;
  top: -150px;
  left: 50%;
  margin: 0 0 0 -35%;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  .description-container {
    width: 50%;

    .title-description {
      padding: 10px 0;
    }
    .parrafo {
      line-height: 15px;
    }
  }
  .content-container {
    width: 40%;
    padding: 0 40px;

    .texthorizontal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 35px;
    }
    .linea {
      width: 100%;
      border-bottom: 1px solid rgb(210, 210, 210);
    }
  }
`;
