import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignUp } from "../authentication/SignUp";
import { Login } from "../authentication/log";
import { Logo } from "../Elements_IU/Logo";
import {
  sigInwithGooglePopup,
  createUserDocumentFromAuth,
  sigInwithFacebookPopup,
} from "../../utils/firebase.utils";
import { Button100 } from "../Elements_IU/Buttons100";


import { selectIsSiginOpen } from "../../store/user/user.selector";
import { setSigninOpen } from "../../store/user/user.reduce";
import { useSelector, useDispatch } from "react-redux";

export function Authentication() {

  const isopenmodalsign = useSelector(selectIsSiginOpen);
  const dispatch = useDispatch()


  const Cerrarmessage = () => {
    dispatch(setSigninOpen(false))
  
  };

  if (!isopenmodalsign) {
    return;
  }

  const logGoogleUser = async () => {
    const { user } = await sigInwithGooglePopup();    
    createUserDocumentFromAuth(user);
    Cerrarmessage();
  };
  const logFaceBookUser = async () => {
    try {
      const { user } = await sigInwithFacebookPopup();     
      createUserDocumentFromAuth(user);
      Cerrarmessage();
    } catch (error) {
      if (error.code = "auth/account-exists-with-different-credential") {        
        alert("el correo relacionado ya existe con otro provedor");
      }
    }
  };

  return (
    <Container_Modal onClick={Cerrarmessage}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="subcontainer"
      >
        <div className="logo">
          <Logo />
        </div>

        <h3>Registrate o Ingresa para Continuar</h3>

        <p className="parrafo">
          Necesitamos conocer tu dirección de correo electrónico para poder
          enviarte la factura electrónica de tu compra
        </p>
        <div className="login">
          <Login />
        </div>
        <div className="division">
          <h5 className="text-intermediate">Ó</h5>
          <h5 className="linea"></h5>
        </div>

        <div className="btn-facebook">
          <Button100 onClick={logFaceBookUser} buttonType="facebook">
            ACCEDE CON FACEBOOK
          </Button100>
        </div>

        <Button100 onClick={logGoogleUser} buttonType="google">
          ACCEDE CON GOOGLE
        </Button100>

        <div className="without-sesion">
          <h5 className="">Aun no tienes cuenta?</h5>
          <h5 className="">
            <strong>Registrate aqui</strong>
          </h5>
        </div>

        <SignUp />
      </div>
    </Container_Modal>
  );
}
const Container_Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
  z-index: 20;
  text-align: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .parrafo {
    margin-top: 10px;
  }

  .subcontainer {
    width: 380px;
    min-height: 560px;
    border-radius: 10px;
    position: fixed;
    opacity: 30;
    padding: 30px;
    background-color: white;
    position: relative;

    .login {
      margin-top: 20px;
    }

    .btn-facebook {
      margin-bottom: 10px;
    }
    .division {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .text-intermediate {
        width: 30px;
        padding: 20px 0;
        background-color: #ffffff;
        z-index: 10;
      }
      .linea {
        position: absolute;
        top: 26px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgb(163, 163, 163);
        z-index: 1;
      }
    }
    .without-sesion {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }
  }
`;
