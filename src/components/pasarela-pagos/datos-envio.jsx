import styled from "styled-components";
import { FormInput } from "../Elements_IU/Form-input";
import { Button } from "../Elements_IU/Buttons";


export function DatosEnvio() {
  return (
    <Container>
      <div className="subcontainer-envio">
        <div className="envio-left">
          <FormInput
            type="text"
            placeholder="Ingrese la dirección de domicilio"
          />
          <br></br>
          <FormInput type="text" placeholder="Ingrese el departamento" />
        </div>
        <div className="envio-right">
          <FormInput type="text" placeholder="Ingrese la ciudad" />
          <br></br>
          <FormInput
            type="text"
            placeholder="Información adicional ej: unidad, Bloque, apto, etc"
          />
        </div>
      </div>
      <div className="boton1">
        <Button buttonType="default">Continuar</Button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 10px;
  padding-bottom: 10px;

  .subcontainer-envio {
    margin-top: 5px;
    display: flex;
    .envio-left {
      width: 60%;
      padding: 20px;
    }
    .envio-right {
      width: 40%;
      padding: 20px;
    }
  }
  .boton1 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;
