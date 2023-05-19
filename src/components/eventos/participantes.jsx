import styled from "styled-components";
export function Participantes() {
  return (
    <ContainerParticipantes>
      <h1 className="title-participantes">Algunos de nuestros participantes</h1>
      <div className="subcontainer-participantes">
        <div className="logo">
          <img className="img-logo" src="https://i.ibb.co/WGFTbz1/beer.jpg" />
        </div>

        <div className="logo">
          <img
            className="img-logo"
            src="https://i.ibb.co/gzfLb66/logotortas.jpg"
          />
        </div>

        <div className="logo">
          <img
            className="img-logo"
            src="https://i.ibb.co/7nfSTfX/canabis.jpg"
          />
        </div>

        <div className="logo">
          <img
            className="img-logo"
            src="https://i.ibb.co/jLySkyc/collares.png"
          />
        </div>

        <div className="logo">
          <img
            className="img-logo"
            src="https://i.ibb.co/3v3Trdv/artesanias.png"
          />
        </div>
      </div>
    </ContainerParticipantes>
  );
}
const ContainerParticipantes = styled.div`
  width: 100%;
  height: 400px;
  padding: 0 100px;

  .title-participantes {
    text-align: center;
    margin-top: 40px;
  }

  .subcontainer-participantes {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .logo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: green;

    .img-logo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
