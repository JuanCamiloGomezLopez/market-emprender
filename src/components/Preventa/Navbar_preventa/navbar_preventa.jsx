import styled from "styled-components";
import { Logo } from "../../Elements_IU/Logo";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { sigOutUser } from "../../../utils/firebase.utils";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { Authentication } from "../../modales/modal-authentication";
import { selectIsSiginOpen } from "../../../store/user/user.selector";
import { setSigninOpen } from "../../../store/user/user.reduce";
import { CartIcon } from "../../tienda/car-icon.component";
import { selectIsCarOpen } from "../../../store/cart/cart.selector";
import { CarDropdown } from "../../tienda/car-dropdown";

export function Navbar_Preventa() {
  const currentuser = useSelector((state) => state.user.currentUser);
  const [clicke, setClick] = useState(false);
  const isopenmodalsign = useSelector(selectIsSiginOpen);
  const opencar = useSelector(selectIsCarOpen);
  const [openoutuser, setOpenoutUser] = useState(false);
  const dispatch = useDispatch();

  const seignOuthandler = async () => {
    await sigOutUser();
    setOpenoutUser(false);
  };

  const openuserout = () => {
    setOpenoutUser(!openoutuser);
  };
  return (
    <Container_navbar clicke={clicke}>
      <div className="container-logo">
        <Logo />
      </div>

      {currentuser ? (
        <div className="items-container" clicke={clicke}>
          <Link to="/profile">
            <span className="navbar-items"> Mis Favoritos</span>
          </Link>
          <Link to="/profile">
            <span className="navbar-items"> Historial de compras</span>
          </Link>
          <Link to="/tienda">
            <span className="navbar-items"> Tienda Virtual</span>
          </Link>
        </div>
      ) : (
        <div className="items-container" clicke={clicke}>
          <span
            onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
            className="navbar-items"
          >
            Mis Favoritos
          </span>
          <span
            onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
            className="navbar-items"
          >
            Historial de compras
          </span>
          <Link to="/tienda">
            <span className="navbar-items"> Tienda Virtual</span>
          </Link>
        </div>
      )}

      <div className="usuario">
        {currentuser ? (
          <div className="fotoperfil">
            <div className="circulo">
              <h5 className="text">
                {currentuser.email.toUpperCase().substring(0, 1)}
              </h5>
            </div>
            <h5 className="text-1">{currentuser.email}</h5>
            <AiOutlineDown className="icon" onClick={openuserout} />
            {openoutuser ? (
              <div onClick={seignOuthandler} className="outUser">
                <h5 className="signout">SIGN OUT</h5>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="sign-in">
            <FaUserCircle className="fotouser" />
            <a
              onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
              className="registro"
            >
              SIGN IN
            </a>
          </div>
        )}

      </div>
          <div className="car-icon">
          {opencar ? <CarDropdown /> : null}
             <CartIcon />
          </div>
     

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
  }

  .container-logo {
    z-index: 20;
  }

  .items-container {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 760px) {
      position: fixed;
      top: 80px;
      right: 10px;
      height: 350px;
      width: 200px;
      z-index: 10;
      border-radius: 10px;
      background: #e0e0e0c1;
      backdrop-filter: blur(4px);
      transform: ${(props) =>
      props.clicke ? "translateY(0)" : "translateY(-1000%)"};
      transition: all 0.3s ease;
      flex-direction: column;
      justify-content: center;
      touch-action: none;
    }

    .navbar-items {
      padding: 0 40px;
      cursor: pointer;
      @media (max-width: 760px) {
        font-size: 15px;
        line-height: 50px;
        padding: 0;
      
      }
    }
  }

  .usuario {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 250px;

    @media (max-width: 760px) {
      display: none;
    }

    .sign-in {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .fotouser {
        width: 30px;
        height: 30px;
        color: rgb(148, 148, 148);
      }
      .registro {
        margin: 0 10px;
      }
    }

    .fotoperfil {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .circulo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: rgb(6, 110, 179);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 17px;

        .text {
          color: white;
        }
      }
      .text-1 {
        color: #000000;
        font-weight: 600;
        margin-left: 10px;
        margin-right: 5px;
      }
      .icon {
        cursor: pointer;
      }

      .outUser {
        position: absolute;
        top: 30px;
        right: 0;
        width: 90px;
        height: 30px;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          border: 1px solid ${(props) => props.theme.color2};
        }

        .signout {
          font-size: 12px;
          font-weight: 500;
          &:hover {
            color: ${(props) => props.theme.color2};
          }
        }
      }
    }
  }

  .car-icon{
    display: none;
    margin-right: 40px;

    @media (max-width: 760px) {
    display: flex;
  }
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
