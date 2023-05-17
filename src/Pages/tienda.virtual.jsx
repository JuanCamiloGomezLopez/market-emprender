import styled from "styled-components";
import { SearchCategories } from "../components/tienda/search-category";
import { CardEmprendimiento } from "../components/tienda/card.emprend";
import { Footer } from "../components/Preventa/footer/footer";
import { Questions } from "../components/Preventa/Preguntas/questions";
import { Promocion } from "../components/tienda/promocion";
import { useSelector, useDispatch } from "react-redux";
import { selectTiendaMap } from "../store/productos.tienda/tienda.selector";
import { getlisproducttiendaAndDocuments } from "../utils/firebase.utils";
import { setTienda } from "../store/productos.tienda/tienda.reducer";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar_Tienda } from "../components/tienda/navbar_tienda";

export function Tienda() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getlistproductTiendaMap = async () => {
      const listaarray = await getlisproducttiendaAndDocuments();
      dispatch(setTienda(listaarray));
    };
    getlistproductTiendaMap();
  }, []);

  const maps = useSelector(selectTiendaMap);

  const [categorie, setCategorie] = useState("Alimentos");

  const [listproductcategorie, setListproductcategorie] = useState(
    maps[categorie]
  ); 

  useEffect(() => {
    setListproductcategorie(maps[categorie]);
  }, [categorie]);

  return (
    <Container_Blog>
      <div className="navbar-container">
        <Navbar_Tienda />
      </div>
      <div className="portada-preventa">
        <img src="https://i.ibb.co/r6dCVHK/arte.jpg" />
      </div>
      <h1 className="title-blog">NUESTRA TIENDA VIRTUAL MARKET UP!</h1>

      <div className="search-categories">
        <SearchCategories categorie={categorie} setCategorie={setCategorie} />
      </div>
      <h3 className="title-list">
        <strong>{categorie.toLocaleUpperCase()}</strong>
      </h3>

      <div className="list-emprendimientos">
      {listproductcategorie.map((item) => (
          <CardEmprendimiento
            className="item-emprendimiento"
            item={item}
            key={item.id}
            categorie={categorie}
            maps={maps}
          />
        ))}
      </div>

      <Promocion />
      <div className="question-detail">
        <Questions />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container_Blog>
  );
}
const Container_Blog = styled.div`
  width: 100%;
  height: 100%;

  .title-list {
    text-align: center;
    padding: 20px 0;
  }

  .portada-preventa {
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.theme.color4};
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 0;

    .titleportada {
      color: #000000;
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
      z-index: 0;
    }
  }

  .title-blog {
    text-align: center;
    padding: 30px;
  }

  .search-categories {
    width: 100%;
    padding: 20px 160px;
  }
  .list-emprendimientos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 160px 20px 160px;

    .item-emprendimiento {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .question-detail {
    margin-top: 40px;
    padding: 0 70px;
    margin-bottom: 40px;
  }

  .footer {
    width: 100%;
    height: 400px;
  }
`;
