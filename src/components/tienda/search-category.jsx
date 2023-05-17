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
    </Container_search_category>
  );
}
const Container_search_category = styled.div`
  width: 100%;

  .categories {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    cursor: pointer;

   
  }
`;
