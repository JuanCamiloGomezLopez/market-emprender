import styled from "styled-components";
import { List_Emprendimiento } from "./list.emprendimientos";
import { Emprendimientos } from "./emprendimientos";
import { BuscaEmprendimiento } from "./bucar_emprendimientos";
import { Diaemprendimiento } from "./diaparaemprendimiento";
import { useSelector } from "react-redux";
import {
  selectPreventasMap,
  selectPreventasinfoMap,
} from "../../../store/Preventa/preventa.selector";

import { useEffect, useState } from "react";
import { selectEmprendimientosMap } from "../../../store/emprendimientos-list/list.selector";
import { Tempo } from "../../Elements_IU/temporizador";

export function Programacion() {
  /*  useEffect(()=>{
    addCollectionandDocuments("product_tienda", TIENDA_DATA )
  },[])    */

  const preventasinfoMap = useSelector(selectPreventasinfoMap);
  const preventasMap = useSelector(selectPreventasMap);
  const listadeemprendedores = useSelector(selectEmprendimientosMap);

  const arraypreventasinfoMap = Object.values(preventasinfoMap);

  const [getname, setGetname] = useState(
    arraypreventasinfoMap[0][0].emprendimiento
  );
  const [getimage, setGetimage] = useState(
    arraypreventasinfoMap[0][0].imagelogo
  );
  const [searchemp, setSearchemp] = useState(
    arraypreventasinfoMap[0][0].emprendimiento
  );

  const [preventa, setPreventa] = useState(preventasMap[getname]);

  useEffect(() => {
    setPreventa(preventasMap[getname]);
  }, [preventasMap, getname]);

  return (
    <Container_programacion_preventa>
      <div className="title-tempor">
        <h2 className="text-h2">Emprendimientos Preventas Activa</h2>
        <Tempo />
      </div>

      <div className="container-list">
        <List_Emprendimiento
          getname={getname}
          setGetname={setGetname}
          setGetimage={setGetimage}
        />
      </div>
      <div className="container_title">
        <img className="img-title" src={getimage} />
        <h2 className="title">{getname}</h2>
      </div>
      <Emprendimientos preventa={preventa} />
      <h2 className="text-search">Buscar por Emprendedores</h2>
      <p className="text-dayp">
        Si deseas saber la fecha de preventa de un emprendimiento especifico
        puedes buscarlo aqui!
      </p>
      <BuscaEmprendimiento searchemp={searchemp} setSearchemp={setSearchemp} />
      <Diaemprendimiento
        searchemp={searchemp}
        listadeemprendedores={listadeemprendedores}
      />
    </Container_programacion_preventa>
  );
}
const Container_programacion_preventa = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media (max-width: 760px) {
    padding: 0px;
  }

  .title-tempor {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text-h2 {
      @media (max-width: 760px) {
        font-size: 15px;
        margin-bottom: 20px;
        margin-top: 30px;
      }
    }

    @media (max-width: 760px) {
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
  }

  .container-list {
    width: 100%;
    height: 80px;
    margin-top: 40px;
    @media (max-width: 760px) {
      height: 120px;
    }
  }
  .container_title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    
    @media (max-width: 760px) {
      flex-direction: column;
    }
    .title{
      @media (max-width: 760px) {
      margin-top: 10px;
      font-size: 18px;
    }
    }

    .img-title {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 10px;
      @media (max-width: 760px) {
      margin-right: 0;
    }
    }
  }
  .text-search {
    margin: 40px 0 5px 0;
    @media (max-width: 760px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;
