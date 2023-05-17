import styled from "styled-components";
import { Button } from "../Elements_IU/Buttons";

import { Link } from "react-router-dom";

import { selectcartItems } from "../../store/cart/cart.selector";

import { setCaropen } from "../../store/cart/cart.reducer";

import { useDispatch, useSelector } from "react-redux";
import { CarItemDropdown } from "./cart.item.dropdown";

export function CarDropdown() {
  const caritems = useSelector(selectcartItems);

  const dispatch = useDispatch();

  const handler = () => dispatch(setCaropen(false));

  return (
    <Container>
      <div className="cart-items">
        {caritems.map((item) => (
          <CarItemDropdown key={item.id} cartitem={item} />
        ))}
      </div>

        
      <Link className="btn-checkout" to="/checkout">
        <Button onClick={handler}>TO CHECKOUT</Button>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(168, 168, 168);
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  top: 70px;
  right: 0px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .btn-checkout {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
