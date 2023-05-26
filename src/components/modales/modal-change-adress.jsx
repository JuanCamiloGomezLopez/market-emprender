import styled from "styled-components";
import addcar from "../../assets/addcar.svg";
import { Button } from "../Elements_IU/Buttons";
import { FormInput } from "../Elements_IU/Form-input";

export function ChangeAdress({
  openmodalchangeadress,
  setOpenmodalchangeadress,
  emprendedor,
  changedadress,
  setChangedadress
}) {

  const Cerrarmessage = () => {
    setOpenmodalchangeadress(false);
    
  };

  const Onchangedata = (e) => {
    const { name, value } = e.target;
    setChangedadress({ ...changedadress, [name]: value,  "emprenedor": emprendedor});
  };

  if (!openmodalchangeadress) {
    return;
  }

  return (
    <Container_Modal onClick={Cerrarmessage}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="subcontainer"
      >
        <div className="title-modal-carro">
          <img className="img-car" src={addcar} />
          <h3>Cambio de dirección para envio de productos {emprendedor}</h3>
        </div>

        <div className="change-container">
          <FormInput
            type="text"
            onChange={Onchangedata}
            placeholder="* Ingrese la dirección de domicilio"
            name="dirección"
          />
          <br></br>

          <FormInput
            onChange={Onchangedata}
            name="adicional"
            type="text"
            placeholder="Información adicional ej: unidad, Bloque, apto, etc"
          />
          <br></br>

          <FormInput
            onChange={Onchangedata}
            name="departamento"
            type="text"
            placeholder="* Ingrese el departamento"
          />
          <br></br>

          <FormInput
            onChange={Onchangedata}
            name="ciudad"
            type="text"
            placeholder="* Ingrese la ciudad"
          />
        </div>

        <div className="botones-modal">
          <Button
            className="boton1"
            onClick={Cerrarmessage}
            buttonType="default"
          >
            ACEPTAR
          </Button>
        </div>
      </div>
    </Container_Modal>
  );
}
const Container_Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
  z-index: 20;

  .subcontainer {
    width: 600px;

    border-radius: 8px;
    position: fixed;
    opacity: 30;
    padding: 20px;
    background-color: white;
    position: relative;

    @media (max-width: 760px) {
      padding: 5px;
      width: 95%;
      margin: 0 auto;
    }

    .title-modal-carro {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      @media (max-width: 760px) {
        margin-top: 20px;
      }

      .img-car {
        width: 30px;
        margin-right: 10px;
      }
    }

    .change-container {
      padding: 20px 0;
    }

    .botones-modal {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media (max-width: 760px) {
        justify-content: space-between;
        right: 0;
        padding: 0 10px;
      }

      .boton1 {
        margin-left: 10px;
      }
    }
  }
`;
