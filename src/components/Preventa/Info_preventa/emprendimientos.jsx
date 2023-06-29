import styled from "styled-components";
import { Link } from "react-router-dom";
import { PREVENTA_DATA } from "../../../data/preventa.data";
import { CardPreventa } from "./card.preventa";

export function Emprendimientos({ preventa }) {
  return (
    <Container_Emprendimiento_preventa>
      <div className="containercajas">
        {preventa.map((item) => (
          <CardPreventa
            key={item.id}
            preventa_item={item}
            preventa={preventa}
          />
        ))}
      </div>
    </Container_Emprendimiento_preventa>
  );
}
const Container_Emprendimiento_preventa = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 760px) {
    width: 100%;
    justify-content: center;
    align-items: center;  
    margin: 0 auto;   
  }
  .containercajas {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin: 0 auto;
    align-items: stretch;
    position: relative;

    @media (max-width: 760px) {    
      width: 100px;
      grid-template-columns: repeat(2, 1fr);   
      justify-content: center;    
      align-items: stretch;
      
    }
  }
`;
