import styled from "styled-components";
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import step3 from "../../assets/step3.jpg";

export function Comienza() {
  return (
    <Container>
      <h1 className="title-comienzo">
        Comenzar con <span>Market Up</span> es muy facil
      </h1>

      <div className="container-steps">
        <div className="step">
          <img className="img-step" src={step3} />
          <h2>Contactanos </h2>
          <p className="text">
            Estamos anciosos de atenderte, cantáctanos en todas nuestras redes
            sociales ó dejanos un numero telefónico y te llamamos
          </p>
        </div>
        <div className="step">
          <img className="img-step" src={step2} />
          <h2>Registrate </h2>
          <p className="text">
            Cuentanos de ti y de tu negocio, cada detalle es importante,
            completa los formularios de registro
          </p>
        </div>
        <div className="step">
          <img className="img-step" src={step1} />
          <h2>Que quieres vender? </h2>
          <p className="text">
            Dinos que quieres vender, y nosotros nos ocupamos del resto!
          </p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%; 
  padding: 100px;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 760px) {
    padding: 0;
    }

  .title-comienzo {
    padding: 20px;

    @media (max-width: 760px) {
        font-size: 25px;
        text-align: center;
      }

    span {
      font-size: 40px;
      color: ${(props)=>props.theme.color3};
    }
  }

  .text {
    margin-top: 10px;
    line-height: 16px;
  }

  .container-steps {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    .step {
      width: 20%;
      height: 260px;

      @media (max-width: 760px) {
        width: 95%;
        margin: 0 auto;
        height: auto;
      }

      .img-step {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 20px;

        
      @media (max-width: 760px) {
        width: 80%;
        
      }
      }
    }
  }
`;
