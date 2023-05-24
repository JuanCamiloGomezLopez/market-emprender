import styled from "styled-components";
import { Logo } from "../Logo";
import { useState } from "react";
import { Authentication } from "../../modales/modal-authentication";
import { ItemsNavbar } from "./Items.navbar";
import { UsuarioNavbar } from "./usuario.navbar";
import { selectIsCarOpen } from "../../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { CartIcon } from "../../tienda/car-icon.component";
import { CarDropdown } from "../../tienda/car-dropdown";

export function NavbarComponent({ type }) {
  const [clicke, setClick] = useState(false);
  const opencar = useSelector(selectIsCarOpen);

  return (
    <Container_navbar clicke={clicke}>
      <Logo />
      <ItemsNavbar clicke={clicke} type={type} />

      {type === "tienda" || type === "preventa" ? <CartIcon /> : null}
      {opencar ? <CarDropdown /> : null}

      <UsuarioNavbar />
      <HamburgerMenu
        clicke={clicke}
        onClick={() => setClick(!clicke)}
      ></HamburgerMenu>
      <Authentication />
    </Container_navbar>
  );
}
const Container_navbar = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  font-size: 12px;
  font-weight: 700;
  padding: 0 80px;

  @media (max-width: 760px) {
    padding: 0 20px;
    position: fixed;
    background-color: white;
  }
`;

const HamburgerMenu = styled.span`
  width: 1.5rem;
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2.8rem;
  right: 10px;
  transform: ${(props) =>
    props.clicke
      ? "translateX(-50%) rotate(45deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;

  @media (max-width: 760px) {
    display: flex;
  }
  &::after,
  &::before {
    content: " ";
    width: 1.5rem;
    height: 2px;
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }
  &::after {
    top: ${(props) => (props.clicke ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicke ? "rotate(90deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.clicke ? "0" : "0.5rem")};
  }
`;
