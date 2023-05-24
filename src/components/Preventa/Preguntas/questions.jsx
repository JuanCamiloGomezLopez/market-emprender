import styled from "styled-components";
import { Accordion } from "./Acordion";
export function Questions() {
  return (
    <ContainerQuestions>
      <div className="subcontainerquestion">
        <h1 className="title-questions">PREGUNTAS</h1>
        <div className="boxes-questions">
          <div className="box-question">
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

          <div className="box-question">
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
      </div>
    </ContainerQuestions>
  );
}
const ContainerQuestions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 120px;

  @media (max-width: 760px) {
    padding: 0;
    margin-bottom: 40px;
  }

  .subcontainerquestion {
    width: 100%;
    margin-top: 50px;

    .title-questions {
      text-align: center;
      padding: 10px 0;
      margin-bottom: 20px;

      @media (max-width: 760px) {
        font-size: 20px;
      }
    }

    .boxes-questions {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 760px) {
        flex-direction: column;
      }

      .box-question {
        width: 50%;
        height: 90%;
        padding: 0 20px;

        @media (max-width: 760px) {
          width: 100%;
        }
      }
    }
  }
`;
