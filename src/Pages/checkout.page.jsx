import styled from "styled-components";
import { Navbar_Preventa } from "../components/Preventa/Navbar_preventa/navbar_preventa";
import { ListProducts } from "../components/Checkout-page/lista.productos";
import { ResumenPagos } from "../components/Checkout-page/resumen.pagos";
import { Footer } from "../components/Preventa/footer/footer";
import { selectcartItems } from "../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../store/cart/cart.reducer";

export function Checkout() {
  var caritems = useSelector(selectcartItems);

  const dispatch = useDispatch;

  const removeall = () => dispatch(reset);

  return (
    <Container_Checkout>
      <Navbar_Preventa />
      <h2 className="title-carrito"> MI CARRITO DE COMPRAS</h2>

      <div className="subcontainer-chekout">
        <div className="list-products">
          <div className="fondo">
            {caritems.map((item) => (
              <ListProducts key={item.id} cartitem={item} />
            ))}
          </div>
          <h5 onClick={removeall} className="vaciar-carro">
            Vaciar mi carrito
          </h5>
        </div>

        <div className="payproduct">
          <ResumenPagos />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container_Checkout>
  );
}
const Container_Checkout = styled.div`
  width: 100%;
  height: 100%;

  .title-carrito {
    margin: 40px 0 20px 0;
    
    text-align: center;
  }

  .subcontainer-chekout {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 760px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    }

    .list-products {
      width: 65%;
      padding: 0px 30px 40px 60px;
      height: 500px;
      overflow-y: auto;
      margin-top: 40px;
      margin-right: 30px;
      @media (max-width: 760px) {
        width: 95%;
        padding: 0;
        margin: 0;
      }

      .fondo {
        border-radius: 10px;
        background-color: ${(props) => props.theme.gray300};
        @media (max-width: 760px) {
          background-color: white;
      
        }
      }

      .vaciar-carro {
        text-align: right;
        margin-right: 20px;
        margin-top: 10px;
        cursor: pointer;
      }
    }
    .payproduct {
      width: 30%;
      padding: 40px 80px 40px 0;
      @media (max-width: 760px) {
        width: 95%;
        padding: 0;
        margin: 30px 0;
      }
    }
  }

  .footer {
    width: 100%;
    height: 400px;
  }
`;
