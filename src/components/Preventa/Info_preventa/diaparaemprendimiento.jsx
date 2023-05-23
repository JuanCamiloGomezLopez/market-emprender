import styled from "styled-components";

export function Diaemprendimiento({ searchemp, listadeemprendedores }) {
  return (
    <Container>
      <div className="imagen">
        <img
          className="img-history"
          src={listadeemprendedores[searchemp][0].imagehistoria}
        ></img>
      </div>
      <div className="informacion">
        <h2 className="titulo-search">{searchemp}</h2>
        <p className="titulo-descr">
          {listadeemprendedores[searchemp][0].descripccion}
        </p>

        <div className="content-text">
          <h5 className="pregunta">Representante legal:</h5>
          <h5>{listadeemprendedores[searchemp][0].representantelegal}</h5>
        </div>
        <div className="linea"></div>

        <div className="content-text">
          <h5 className="pregunta">Ciudad donde se encuentra:</h5>
          <h5>{listadeemprendedores[searchemp][0].ciudad}</h5>
        </div>
        <div className="linea"></div>

        <div className="content-text">
          <h5 className="pregunta">Proxima Preventas:</h5>
          <h5>21 de Mayo de 2023</h5>
        </div>
        <div className="linea"></div>

        <div className="content-text">
          <h5 className="pregunta">Siguiente Preventas:</h5>
          <h5>24 de Mayo de 2023</h5>
        </div>
        <div className="linea"></div>

        <div className="content-text">
          <h5 className="pregunta">Número de Empleados</h5>
          <h5>{listadeemprendedores[searchemp][0].empleados}</h5>
        </div>
        <div className="linea"></div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
 
  display: flex;
  align-content: center;
  justify-content: center;
  

  @media (max-width: 760px) {
    flex-direction: column;

  }

  .imagen {
    width: 50%;
    height: 100%;
    border-radius: 8px;

    @media (max-width: 760px) {
      width: 100%;
    }

    .img-history {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .informacion {
    width: 50%;
    margin: auto 0;
    padding: 0 40px;

    @media (max-width: 760px) {
      width: 100%;
      height: auto;
      padding: 0;
      margin-top: 20px;
    }

    .titulo-search {
      text-align: center;
      margin-bottom: 15px;   
    }
    .titulo-descr {
      @media (max-width: 760px) {
        text-align: center;
        margin-bottom: 40px;   
      }
    }

    .content-text {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
    }
    .pregunta {
      color: #a7a7a7;
    }
    .linea {
      margin-top: 10px;
      border-top: 1px solid #e0e0e0;
    }
  }
`;
