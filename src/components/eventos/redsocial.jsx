import styled from "styled-components";
import { FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
export function RedSocial() {
  return (
    <Container>
      <a href="https://www.facebook.com/TransporteblackBruselas">
        <FaFacebookF />
      </a>
      <a href="https://www.tripadvisor.com/Attraction_Review-g188644-d23318367-Reviews-Eagle_Transfer_Bruselas-Brussels.html">
        <FaTripadvisor />
      </a>
      <a href="https://www.instagram.com/eagletransferbruselas/">
        <AiFillInstagram />
      </a>
      <a href="https://www.google.com/maps/place/Eagle+Transfer+Bruselas/@50.8426436,4.4090605,17z/data=!4m6!3m5!1s0x47c3dcab83a77b39:0x1c93a219fc12e2fd!8m2!3d50.8426403!4d4.4135398!16s%2Fg%2F11hcj_5j5j">
        <AiOutlineGoogle />
      </a>
    </Container>
  );
}
const Container = styled.div`
  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.color3};
    border-radius: 50%;
    font-size: 20px;
    color: ${(props) => props.theme.color3};
    text-decoration: none;
    margin-top: 15px;
    margin-right: 15px;
    transition: 0.5s ease;

    &:hover {
      background: ${(props) => props.theme.color3};
      color: ${(props) => props.theme.body};
      box-shadow: 0 0 20px ${(props) => props.theme.color3};
    }
  }
`;
