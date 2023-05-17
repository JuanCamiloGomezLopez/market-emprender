import styled from "styled-components";
import { Logo } from "../Elements_IU/Logo";
import { FaUserCircle } from "react-icons/fa";
import { CartIcon } from "../tienda/car-icon.component";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCarOpen } from "../../store/cart/cart.selector";
import { CarDropdown } from "./car-dropdown";
import { Authentication } from "../../components/modales/modal-authentication";
import { selectIsSiginOpen } from "../../store/user/user.selector";
import { setSigninOpen } from "../../store/user/user.reduce";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { sigOutUser } from "../../utils/firebase.utils";

export function Navbar_Tienda() {
  const opencar = useSelector(selectIsCarOpen);

  const currentuser = useSelector((state) => state.user.currentUser);

  const isopenmodalsign = useSelector(selectIsSiginOpen);
  const [openoutuser, setOpenoutUser] = useState(false);
  const dispatch = useDispatch();

  const openuserout = () => {
    setOpenoutUser(!openoutuser);
  };

  const seignOuthandler = async () => {
    await sigOutUser();
    setOpenoutUser(false);
  };

  return (
    <Container_navbar>
      <Logo />

      {currentuser ? (
        <div className="items-container">
           <Link to="/profile">
            <span className="navbar-items"> Mis Favoritos</span>
          </Link>
          <Link to="/profile">
            <span className="navbar-items">  Historial de compras</span>
          </Link> 

          <Link to="/preventa">
            <span className="navbar-items"> Preventas</span>
          </Link>
        </div>
      ) : (
        <div className="items-container">
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
          <Link to="/preventa">
            <span className="navbar-items"> Preventa</span>
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
            {opencar ? <CarDropdown /> : null}
            <CartIcon />
          </div>
        ) : (
          <div className="sign">
            <FaUserCircle className="fotouser" />
            <a
              onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
              className="registro"
            >
              SIGN IN
            </a>
            {opencar ? <CarDropdown /> : null}
            <CartIcon />
          </div>
        )}
      </div>
      <Authentication />
    </Container_navbar>
  );
}
const Container_navbar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  font-size: 12px;
  font-weight: 700;
  padding: 0 40px;

  .navbar-items {
    padding: 0 40px;
    cursor: pointer;
  }
  .usuario {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 250px;
    

    .sign {
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
        top: 35px;
        right: 47px;
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
`;
