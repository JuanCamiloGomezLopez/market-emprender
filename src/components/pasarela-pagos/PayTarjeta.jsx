import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "../Elements_IU/Buttons";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCarTotal } from "../../store/cart/cart.selector";

export function PayTarjeta() {
  const [databackend, setDatabackend] = useState("");
  const [stripePromise, setStripePromise] = useState(() => loadStripe(import.meta.env.VITE_APP_PUBLIC_STRIPE));
  const totalcarro = useSelector(selectCarTotal);

  const Checkform = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlersubmit = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { id } = paymentMethod;
        try {
          const { data } = await axios.post(
            "http://localhost:5175/api/checkout",
            {
              id,
              amount: totalcarro * 100,
            }
          );
          setDatabackend(data.message);

          if (data.message === "Successful Payment") {
            alert("el pago fue exitoso");
          }

          if (data.message != "Successful Payment") {
            alert(data.message);
          }

          elements.getElement(CardElement).clear();
        } catch (error) {
          alert(error);
        }
      }
    };
    return (
      <form onSubmit={handlersubmit} className="infocard">
        <CardElement className="cardelement" />
        <div className="btn">
          <Button buttonType="amarillo">PAGAR</Button>
        </div>
      </form>
    );
  };

  return (
    <Container>
      <h4 className="tarjeta">Pago con tarjeta de crédito</h4>
      <Elements stripe={stripePromise}>
        <Checkform />
      </Elements>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  border: 1px solid rgb(218, 218, 218);
  border-radius: 10px;
  padding: 20px;
  margin-top: 5px;

  .cardelement {
    height: 45px;
  }

  .tarjeta {
    margin-bottom: 20px;
  }

  .infocard {
    width: 100%;
    border: 1px solid rgb(218, 218, 218);
    border-radius: 10px;
    padding: 10px;

    .btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;
