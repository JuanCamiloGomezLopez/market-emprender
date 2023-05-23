import styled from "styled-components";
import { ItemsResumen } from "./items-resumen";
import { Button } from "../Elements_IU/Buttons";
import { useSelector } from "react-redux";
import {
  selectcartItems,
  selectCarTotal,
} from "../../store/cart/cart.selector";

export function ResumenPagos() {
  const caritemsMap = useSelector(selectcartItems);
  const total = useSelector(selectCarTotal);

  return (
    <Container>
      <div className="resumen">
        <h3 className="title-center">Resumen del pedido</h3>
        <div className="productos">
          {caritemsMap.map((item) => {
            return <ItemsResumen cartitem={item} key={item.id} />;
          })}
        </div>
        <div className="linea"></div>
        <div className="boton-volver">
          <Button buttonType="complet">Volver al carrito</Button>
        </div>
        <div className="totales">
          <h3 className="">Subtotal</h3>
          <h3 className="">{total}</h3>
        </div>
        <div className="totales">
          <h3 className="">Gastos de envío</h3>
          <h3 className="">11.70 k</h3>
        </div>

        <div className="total">
          <h3 className="">Total</h3>
          <h3 className="">136.40 k</h3>
        </div>
        <div className="boton-volver">
          <Button buttonType="completamarillo">PAGAR</Button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 30%;
  margin-top: 40px;

  @media (max-width: 760px) {
    width: 100%;
    margin: 20px auto;
  }

  .resumen {
    border: 1px solid rgb(218, 218, 218);
    border-radius: 10px;
    padding: 20px;
    margin-right: 40px;

    @media (max-width: 760px) {
      width: 95%;
      margin: 0 auto;
    }
  }
  .productos {
    width: 100%;
    height: 270px;
    overflow-y: auto;   
  }

  .title-center {
    text-align: center;
    margin-bottom: 20px;
 
  }
  .linea {
    position: relative;
    display: block;
    width: 100%;
    border-top: 1px solid rgb(218, 218, 218);
    margin-top: 20px;
  }
  .boton-volver {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .totales {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 10px;
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    background-color: ${(props) => props.theme.color7};
    height: 40px;
    border-radius: 5px;
    padding: 0 20px;
    width: 100%;
  }
`;
