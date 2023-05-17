import styled from "styled-components";
import { Button100 } from "../Elements_IU/Buttons100";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";
import { FormInput } from "../Elements_IU/Form-input";
import {
  selectCarCount,
  selectCarTotal,
  selectdescuentoTotal,
} from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { Authentication } from "../modales/modal-authentication";
import { useNavigate } from "react-router-dom";
import { setSigninOpen } from "../../store/user/user.reduce";

export function ResumenPagos() {
  const currentuser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const countproduct = useSelector(selectCarCount);
  const priceoferta = useSelector(selectCarTotal);
  const priceactual = useSelector(selectdescuentoTotal);

  var totalactual = priceactual.toFixed(2);
  var descuentoTotal = priceactual - priceoferta;
  var totaldescuento = descuentoTotal.toFixed(2);

  var domicilioprice = 3.25;

  var total = priceactual - totaldescuento + domicilioprice;

  const open_modal = () => {
    if (currentuser) {     
      navigate("/pasarela_pagos");
      dispatch(setSigninOpen(false)); 
    } else {
      dispatch(setSigninOpen(true));      
    }
  };

  return (
    <Container_resumen>
      <div className="descuento">
        <h6 className="title-cupon">Ingrese su cupon de descuento</h6>
        <div className="inputcupon">
          <FormInput type="text" placeholder="Ingrese Cupon" name="email" />
          <Link to="/checkout">
            <Button buttonType="amarillo">APLICAR</Button>
          </Link>
        </div>
      </div>
      <div className="resumen">
        <div className="text-horizontal">
          <h4>Subtotal Productos ({countproduct})</h4>
          <h4>
            <strong>$ {totalactual}k</strong>
          </h4>
        </div>

        <div className="text-horizontal">
          <h4>Descuentos emprender</h4>
          <h4>
            <strong>$ {totaldescuento}k</strong>
          </h4>
        </div>

        <div className="text-horizontal">
          <h4>Descuentos por cupones</h4>
          <h4>
            <strong>$ 0.00</strong>
          </h4>
        </div>

        <div className="text-horizontal">
          <h4>Costo Domicilio</h4>
          <h4>
            <strong>$ {domicilioprice}k</strong>
          </h4>
        </div>
      </div>

      <div className="text-horizontal-total">
        <h4>Total (Ya incluye IVA)</h4>
        <h4>
          <strong>$ {total}</strong>
        </h4>
      </div>

   
        <div className="boton-pago" onClick={open_modal}>
          <Button100 buttonType="default">CONTINUAR CON EL PAGO</Button100>
        </div>


      <Link className="boton-compra" to="/preventa">
        <Button100 buttonType="amarillo">SEGUIR COMPRANDO</Button100>
      </Link>
      <Authentication />
    </Container_resumen>
  );
}
const Container_resumen = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.gray300};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .descuento {
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 8px;
    padding: 10px;

    .title-cupon {
      margin-bottom: 10px;
    }

    .inputcupon {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .resumen {
    width: 100%;
    height: 150px;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    padding: 20px;

    .text-horizontal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 30px;
    }
  }

  .text-horizontal-total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    padding: 12px 12px 12px 20px;
  }

  .boton-pago {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .boton-compra {
    width: 100%;
  }
`;
