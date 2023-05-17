import styled from "styled-components";
import { CardReviews } from "./Card-reviews";
import { Button } from "../../Elements_IU/Buttons";

export function Opiniones() {
  const go_to_preshop = () => {};

  return (
    <Container_opiniones_preventa>
      <h2 className="title-reviews">Opiniones Reales</h2>
      <div className="content-opiniones">
        <p>
          Aqui encontrraras las opiniones reales de los emprendimientos que se
          encuentren en preventa el dia de hoy
        </p>
      </div>

      <CardReviews />
      <CardReviews />
      <CardReviews />
      <CardReviews />
      <CardReviews />

      <div className="button-content">
        <Button onClick={go_to_preshop} buttonType="default">
          VER TODAS
        </Button>
      </div>
    </Container_opiniones_preventa>
  );
}
const Container_opiniones_preventa = styled.div`
  width: 100%;
  height: 740px;
  padding: 0 0 10px 0;
  border-radius: 8px;
  margin-top: 20px;
  overflow-y: auto;
  z-index: 10;


  .title-reviews {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;
  }

  .content-opiniones {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    text-align: justify;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px
  }
`;
