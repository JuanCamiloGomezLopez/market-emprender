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
              {caritems.map(item => <ListProducts key={item.id} cartitem={item}/>)}     
          </div>            
          <h5 onClick={removeall} className="vaciar-carro">Vaciar mi carrito</h5>
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

  .title-carrito{
    margin-top: 40px;
    text-align: center;
  }

  .subcontainer-chekout {
    width: 100%;
    display: flex;    
    justify-content: space-between;

    .list-products {      
      width: 65%;
      padding: 0px 30px 40px 60px;
      height: 500px;
      overflow-y: auto;
      margin-top: 40px;       
      margin-right: 30px;

      .fondo{
        border-radius: 10px;
        background-color: ${(props) => props.theme.gray300};
      }    

      .vaciar-carro{
        text-align: right;
        margin-right: 20px;
        margin-top: 10px;
        cursor: pointer;
      }
     
    }
    .payproduct{
        width: 30%;
        padding: 40px 80px 40px 0;        
    }
  }
  .footer {
    width: 100%;
    height: 400px;
  }
`;
