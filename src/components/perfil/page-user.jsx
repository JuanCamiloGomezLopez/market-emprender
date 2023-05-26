import styled from "styled-components";
import { useSelector } from "react-redux";
import { CardFavorites } from "./card.favorites";
import { selectIsFavorite } from "../../store/favorites/favorite.selector";
import { NavbarComponent } from "../Elements_IU/navbarcomponent/Navbar.tipico";
export function PageUser() { 
  const productfavorite = useSelector(selectIsFavorite);
  const arrayprodcut = Object.values(productfavorite);
  console.log(productfavorite)

  return (
    <Container>
      <NavbarComponent type="perfil"/>
      <div className="subcontainer">
        <div className="registro-compras-container">
          <h2 className="titulo1">Mi Historial de compras</h2>
          <div className="containerhistorial">
            <div className="compra"></div>
            <div className="compra"></div>
          </div>
        </div>

        <div className="favorites-container">
          <h2 className="titulo">Mis favoritos</h2>

          <div className="containercajas1">
            {arrayprodcut.map((item) =>
              item.id ? <CardFavorites products={item} key={item.id} /> : null
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  .subcontainer {
    display: flex;
    justify-content: space-between;

    .registro-compras-container {
      width: 30%;
      padding: 30px 50px 50px 50px;

      .titulo1{
        margin-left: 20px;
      }

      .containerhistorial {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 20px;

        .compra {
          width: 100%;
          margin: 0 auto;
          height: 100px;
          border: 1px solid rgb(201, 201, 201);
          border-radius: 10px;
          background-color: white;
          margin-bottom: 15px;
        }
      }
    }

    .favorites-container {
      width: 70%;
      padding: 30px 50px 50px 50px;

      .titulo {
        margin-left: 20px;
      }

      .containercajas1 {
        width: 100%;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    }
  }
`;
