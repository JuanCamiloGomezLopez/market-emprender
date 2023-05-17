import styled from "styled-components";
import { Accordion } from "./Acordion";
export function Questions() {
  return (
    <Container>
      <h1 className="title-questions">PREGUNTAS</h1>

      <div className="boxes">
        <div className="box">
          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>
        </div>

        <div className="box">
          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>

          <Accordion title={"Cuando se vencen las preventas?"}>
            {"Las preventas tienen una visibiliad de 15 dias"}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  height: 300px;
  margin: 0px auto;
  

 

  .title-questions {
    text-align: center;
    padding: 10px 0;
  }

  .boxes {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .box {
      width: 50%;
      height: 90%;
      padding: 0 20px;
    }
  }
`;
