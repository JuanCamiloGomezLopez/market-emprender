import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { setSigninOpen } from "../../../store/user/user.reduce";
import { selectIsSiginOpen } from "../../../store/user/user.selector";
import { useSelector, useDispatch } from "react-redux";
import { sigOutUser } from "../../../utils/firebase.utils";

export function UsuarioNavbar() {
  const currentuser = useSelector((state) => state.user.currentUser);
  const [openoutuser, setOpenoutUser] = useState(false);
  const isopenmodalsign = useSelector(selectIsSiginOpen);

  const dispatch = useDispatch();

  const openuserout = () => {
    setOpenoutUser(!openoutuser);
  };

  const seignOuthandler = async () => {
    await sigOutUser();
    setOpenoutUser(false);
  };

  return (
    <ContainerUsuarioNavbar>
      {currentuser ? (
        <div className="fotoperfil" >
          <div className="circulo" >
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
        <div className="sign-in" >
          <FaUserCircle className="fotouser" onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}/>
          <a
            onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}
            className="registro"
          >
            SIGN IN
          </a>
        </div>
      )}
    </ContainerUsuarioNavbar>
  );
}
const ContainerUsuarioNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 250px;

  .sign-in {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    @media (max-width: 760px) {
      margin-right: 10px;      
    }
    .fotouser {
      width: 30px;
      height: 30px;
      color: rgb(148, 148, 148);
    }
    .registro {
      margin: 0 10px;
      @media (max-width: 760px) {
      display :none ;
    }
    }
  }

  .fotoperfil {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 760px) {
      margin-right: 40px;
    }

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
      font-weight: 600;
      margin-left: 10px;

      @media (max-width: 760px) {
        display: none;
      }
    }
    .icon {
      cursor: pointer;
      margin-left: 10px;
    }

    .outUser {
      position: absolute;
      top: 40px;
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
`;
