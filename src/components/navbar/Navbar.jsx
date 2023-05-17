import styled from "styled-components";
import { Logo } from "../Elements_IU/Logo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { sigOutUser } from "../../utils/firebase.utils";
import { FaUserCircle } from "react-icons/fa";
import { setSigninOpen } from "../../store/user/user.reduce";
import { selectIsSiginOpen } from "../../store/user/user.selector";
import { Authentication } from "../modales/modal-authentication";

export function Navbar() {
  const [openoutuser, setOpenoutUser] = useState(false);

  const currentuser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const isopenmodalsign = useSelector(selectIsSiginOpen);

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

      <div className="container-item">        
        <Link to="/">
          <span > Home</span>
        </Link>
        <Link to="/historias">
          <span > Eventos</span>
        </Link>

        <Link to="/historias">
          <span> Blog</span>
        </Link>

        <Link to="/Preventa">
          <span > Preventas</span>
        </Link>

        <Link to="/tienda">
          <span > Tienda</span>
        </Link>

        {currentuser ? (
          <Link to="/profile">
            <span > Perfil</span>
          </Link>
        ) : (
          <span
            onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
            className="navbar-items"
          >      
            Perfil
          </span>
        )}
      </div>

      <div className="usuario">
        {currentuser ? (
          <div className="fotoperfil">
            <div className="circulo">
              <h5 className="text">{currentuser.email.substring(0, 1)}</h5>
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


  .container-logo {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img-logo {
      margin-left: 0px;
      width: 35px;
      height: auto;
    }
  }
  .container-item {
    width: 50%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    .navbar-items{
      cursor: pointer;
    }


    span {
   
   

      &:hover {
        color: ${(props) => props.theme.color2};
      }
      &::after {
        content: " ";
        display: block;
        width: 0%;
        height: 2px;
        background: ${(props) => props.theme.color2};
        transition: width 0.3s ease;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .usuario {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 250px;

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
`;
