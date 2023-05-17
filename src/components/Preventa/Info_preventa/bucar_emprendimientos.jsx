import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectEmprendimientosMap } from "../../../store/emprendimientos-list/list.selector";

export function BuscaEmprendimiento({searchemp, setSearchemp}) {
  
  const listemprendimientosMap = useSelector(selectEmprendimientosMap);
  const arraylistemprendimientosMap = Object.keys(listemprendimientosMap);

  return (
    <Container_buscar_preventa>
      <div className="input-search">
        <label className="label-input">Emprendimiento</label>
        <div className="container-input">
          <AiOutlineSearch />           
          <select
                className="seleccionar"              
                onChange={(e) => {setSearchemp(e.target.value);}}
                value={searchemp}
              >   
                {arraylistemprendimientosMap.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
          </select>          
        </div>
      </div>     
    </Container_buscar_preventa>
  );
}
const Container_buscar_preventa = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .input-search {
    width: 50%;
    height: 80px;   

    .container-input {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      background-color: rgb(239, 240, 241);
      border-radius: 10px;

      .seleccionar{
        width: 80%;
        height: 35px;
        border: none;
        background-color: rgb(239, 240, 241);

        &:focus {
          outline: none;
          border: none;
          background-color: rgb(239, 240, 241);          
        }
       
      }
    }   
  }

  
`;
