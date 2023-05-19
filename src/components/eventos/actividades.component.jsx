import styled from "styled-components";
import { GiPartyFlags, GiTeacher } from "react-icons/gi";
import { CategorieItem } from "./categoria.item";
import { TbGoGame } from "react-icons/tb";
import { MdOutlineCastForEducation, MdFamilyRestroom } from "react-icons/md";



export function Actividades() {
  return (
    <Container_Actividades>
      <CategorieItem
        titulo="Feria de emprendimiento" 
        Icon={GiPartyFlags}
      />

      <CategorieItem
        titulo="Juegos Recreativos"
        Icon={TbGoGame}
      />

      <CategorieItem
        titulo="Educación en el exterior"        
        Icon={MdOutlineCastForEducation}
      />

      <CategorieItem
        titulo="Charlas educativas"      
        Icon={GiTeacher}
      />

      <CategorieItem
        titulo="Muestras culturales"      
        Icon={MdFamilyRestroom}
      />
    </Container_Actividades>
  );
}
const Container_Actividades = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  .categorie-actividad {
    width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .actividad {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.color3};
      display: flex;
      align-items: center;
      justify-content: center;

      .feria {
        width: 40%;
        height: 40%;
        color: ${(props) => props.theme.color3};
      }
    }
  }
`;
