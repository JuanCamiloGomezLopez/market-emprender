import styled from "styled-components";
import { Link } from "react-router-dom";
import { setSigninOpen } from "../../../store/user/user.reduce";
import { selectIsSiginOpen } from "../../../store/user/user.selector";
import { useSelector } from "react-redux";

export function ItemsNavbar({ clicke, type }) {
  const isopenmodalsign = useSelector(selectIsSiginOpen);
  const currentuser = useSelector((state) => state.user.currentUser);

  return (
    <ContainerItemsNavbar clicke={clicke} type={type}>
      <div className="todos">
        {type === "preventa" || type === "tienda" ? null : (
          <Link to="/">
            <span> Home</span>
          </Link>
        )}

        {type === "preventa" || type === "tienda" ? null : (
          <Link to="/events">
            <span> Eventos</span>
          </Link>
        )}

        {type === "preventa" || type === "tienda" ? null : (
          <Link to="/historias">
            <span> Blog</span>
          </Link>
        )}

        {type === "preventa" || type === "tienda" ? null : (
          <Link to="/Preventa">
            <span> Preventas</span>
          </Link>
        )}

        <Link to="/tienda">
          <span> Tienda</span>
        </Link>

        {currentuser ? (
          <Link to="/profile">
            <span> Perfil</span>
          </Link>
        ) : (
          <span onClick={() => dispatch(setSigninOpen(!isopenmodalsign))}>
            Perfil
          </span>
        )}
      </div>
    </ContainerItemsNavbar>
  );
}
const ContainerItemsNavbar = styled.div`
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;

  .todos {
    width: ${({ type }) => (type === "preventa" || type === "tienda" ? "30%" : "100%")};
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 760px) {
      position: fixed;
      top: 80px;
      right: 10px;
      height: ${({ type }) => (type === "preventa" || type === "tienda" ? "200px" : "400px")};
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
  }

  .navbar-items {
    cursor: pointer;
  }

  span {
    @media (max-width: 760px) {
      font-size: 15px;
      line-height: 50px;
    }

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
`;
