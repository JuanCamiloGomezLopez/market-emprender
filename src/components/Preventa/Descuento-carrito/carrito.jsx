import styled from "styled-components";
import { Button } from "../../Elements_IU/Buttons";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectcartItems } from "../../../store/cart/cart.selector";
import { CarItem } from "./cart.item";

export function Carrito() {
  const caritems = useSelector(selectcartItems);

  return (
    <Container_carrito>
      <div className="container-product">
        <h2 className="title-cart">Mi Pedido</h2>

        {caritems.map((item) => (
          <CarItem key={item.id} cartitem={item} />
        ))}
      </div>

      <div className="button">
        <Link to="/checkout">
          <Button buttonType="amarillo">IR A PAGAR</Button>
        </Link>
      </div>

      <div className="vaciarcanasta">
        <AiFillDelete className="icon-delete" />
        <h5>Borrar todos los articulos</h5>
      </div>
    </Container_carrito>
  );
}
const Container_carrito = styled.div`
  width: 100%;
  padding: 0 0 10px 0;
  border-radius: 8px;
  background-color: white;
  height: 690px;
  position: relative;

  @media (max-width: 760px) {
    display: none;
  }

  .container-product {
    width: 100%;
    height: 570px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .title-cart {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;
  }

  .button {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 50%;
    margin: 0 0 0 -70px;
  }

  .vaciarcanasta {
    position: absolute;
    width: 100%;
    bottom: 20px;
    display: flex;
    left: 50%;
    margin: 0 0 0 -90px;

    .icon-delete {
      margin-right: 10px;
    }
  }
`;
