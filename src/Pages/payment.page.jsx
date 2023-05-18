import styled from "styled-components";
import { Logo } from "../components/Elements_IU/Logo";
import { useSelector } from "react-redux";
import { selectcartItems } from "../store/cart/cart.selector";
import { ItemproductEnvio } from "../components/pasarela-pagos/producto-info-envio";
import { InformacionPersonal } from "../components/pasarela-pagos/informacion-personal";
import { ResumenPagos } from "../components/pasarela-pagos/resumen-pagos";
import { DatosEnvio } from "../components/pasarela-pagos/datos-envio";
import { PayTarjeta } from "../components/pasarela-pagos/PayTarjeta";

export function PagosProducto() {
  const caritemsMap = useSelector(selectcartItems);
  const caritemsMap_number_emprendimientos = caritemsMap.reduce((acc, item) => {
    if (!acc.includes(item.emprendimiento)) {
      acc.push(item.emprendimiento);
    }
    return acc;
  }, []);

  return (
    <Container>
      <div className="logo-title">
        <Logo />
        <h2 className="text-h2">FINALIZA TU COMPRA EN 3 PASOS</h2>
      </div>
      <div className="container-general">
        <div className="informacion-general">
          <h3 className="title-datos-personales">Información del Usuario</h3>
          <InformacionPersonal />
          <h3 className="title-datos-envio">Datos de envío</h3>
          <DatosEnvio />
          <h3 className="title-datos-envio">Información de envío</h3>
          <div className="informacion-envio">
            {caritemsMap_number_emprendimientos.map((item) => {
              return (
                <ItemproductEnvio
                  key={item}
                  item={item}
                  caritemsMap={caritemsMap}
                />
              );
            })}
          </div>
          <h3 className="title-tarjeta">Metodos de pago</h3>
         <PayTarjeta />
        </div>
        <ResumenPagos />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  .logo-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    .text-h2 {
      padding: 20px;
    }
  }
  .container-general {
    width: 100%;
    display: flex;

    .informacion-general {
      width: 70%;
      padding: 20px 40px 20px 100px;

      .title-datos-personales {
        margin-bottom: 5px;
      }
      .title-datos-envio {
        margin-top: 30px;
        margin-bottom: 5px;
      }

      .informacion-envio {
        width: 100%;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 10px;
        padding: 0 20px 20px 20px;
      }
    
    }

    .title-tarjeta{
      margin-top: 30px;
    }
  }
`;
