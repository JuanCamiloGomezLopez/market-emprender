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
  padding:  80px;
  display: flex;  
  align-items: center;
  justify-content: center;

 @media (max-width: 760px){
  width: 95%;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 40px;
 }
 
`;
