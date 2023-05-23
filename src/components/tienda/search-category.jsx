import styled from "styled-components";
import { FormInput } from "../Elements_IU/Form-input";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineCake } from "react-icons/hi";
import { SiHomebrew } from "react-icons/si";
import { FaCouch } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import {
  MdOutlineDesignServices,
  MdOutlineAgriculture,
  MdLocalCafe,
} from "react-icons/md";
import { CardEmprendimiento } from "./card.emprend";
import { CardCategorie } from "./card.categorie";

export function SearchCategories({ categorie, setCategorie }) {
  return (
    <Container_search_category>
      <FormInput type="text" placeholder="Ingrese el Emprendimiento" />
      <div className="categories">
        <div className="grupo">
          <CardCategorie
            text="Computo"
            Icon={AiOutlineLaptop}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Repostería"
            Icon={HiOutlineCake}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Licores"
            Icon={SiHomebrew}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Muebles"
            Icon={FaCouch}
            setCategorie={setCategorie}
            categorie={categorie}
          />
        </div>
        <div className="grupo">
          <CardCategorie
            text="Alimentos"
            Icon={GiHamburger}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Artesanias"
            Icon={MdOutlineDesignServices}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Agronomia"
            Icon={MdOutlineAgriculture}
            setCategorie={setCategorie}
            categorie={categorie}
          />

          <CardCategorie
            text="Café"
            Icon={MdLocalCafe}
            setCategorie={setCategorie}
            categorie={categorie}
          />
        </div>
      </div>
    </Container_search_category>
  );
}
const Container_search_category = styled.div`
  width: 100%;
  padding: 20px 140px;

  @media (max-width: 760px) {
    padding: 0;
    width: 95%;
    margin: 0 auto;
  }

  .categories {
    display: flex;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    .grupo {
      width: 50%;
      display: flex;
      justify-content: space-around;
      @media (max-width: 760px) {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
`;
