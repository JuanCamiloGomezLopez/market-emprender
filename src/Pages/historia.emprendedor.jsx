import styled from "styled-components";
import { Navbar_Preventa } from "../components/Preventa/Navbar_preventa/navbar_preventa";
import { TituloEmprendedor } from "../components/historia-emprendedores/Titulo.emprendedor";
import { ServiciosHistorias } from "../components/historia-emprendedores/servicios.historias";
import { Footer } from "../components/Preventa/footer/footer";
import { ServiciosHistoriasInverted } from "../components/historia-emprendedores/servicios.histo.inverted";
import { Button } from "../components/Elements_IU/Buttons";
import { Link } from "react-router-dom";
import { FormInput } from "../components/Elements_IU/Form-input";
import { useSelector } from "react-redux";
import { selectEmprendimientosMap } from "../store/emprendimientos-list/list.selector";
import { useState, useEffect } from "react";


export function HistoriaEmprendedor() {
  const listemprendedoresMap = useSelector(selectEmprendimientosMap);
  const arraylistemprendedoresMap = Object.values(listemprendedoresMap);

  const [name, setName]= useState(arraylistemprendedoresMap[0][0].emprendimiento)

  const [infoemprendimiento, setInfoemprendimiento] = useState(
    listemprendedoresMap[name]
  ); 

  console.log(infoemprendimiento)

  useEffect(() => {
    setInfoemprendimiento(listemprendedoresMap[name]);
  }, [name]);



  return (
    <Container>
      <Navbar_Preventa />

      <div className="subcontainer-historia">
        <div className="listacontainer">
          <h2 className="title-historia">Emprendimientos</h2>
          <p className="subtitle">
            Aqui encontraras todos los emprendimientos inscritos dentro de
            Market Up, donde podrás conocer su historia real del emprendimiento
            y saber un poco mas de ellos.
          </p>
          <FormInput type="text" placeholder="Buscar Emprendimiento" />

          {arraylistemprendedoresMap.map((item) => (

            <div            
              onClick={()=>setName(item[0].emprendimiento)}                            
              key={item[0].id}
              {...(name === item[0].emprendimiento ? {className:"active"} : {className:"emprendimiento"})}
            >
              <div className="imagen">
                <img className="img-item" src={item[0].imageUrllogo} />
              </div>
              <div className="product-info">
                <h4>
                  <strong>{item[0].emprendimiento}</strong>
                </h4>
                <p className="description">{item[0].descripccion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="history">
          <div className="portada-preventa">
            {infoemprendimiento[0].categoria === "Artesanias" ?
            <img src="https://i.ibb.co/MMX30TD/25740-laboratorio-guajira-artesanias-colombia-2017-g.jpg" /> :
            infoemprendimiento[0].categoria === "Licor" ?
            
            <img src="https://i.ibb.co/b2S15j1/64592e32e27eb.jpg" /> :
          
            <img src="https://i.ibb.co/Q8LsPSx/lapices.jpg" /> 
          
          }
            
          </div>

          <div className="title-emprendedor">
            <TituloEmprendedor infoemprendimiento={infoemprendimiento} />
          </div>

          {infoemprendimiento.map((item) => (
            <div className="content" key={item.id}>
              <div className="block">
                <h2>Acerca de nosotros</h2>
                <h6 className="parrafo">{item.historia}</h6>
              </div>
              <div className="block">
                <div className="image">
                  <img className="img-empre" src={item.imagehistoria} />
                </div>
              </div>
              <div className="block">
                <h2>Productos Destacados</h2>
                <h6 className="parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, eius rerum ab illum consequuntur saepe, non vero quae
                  alias et rem porro? Deleniti inventore quaerat, asperiores
                  doloribus obcaecati fuga reiciendis. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quidem, eius rerum ab illum
                  consequuntur saepe, non vero quae alias et rem porro? Deleniti
                  inventore quaerat, asperiores doloribus obcaecati fuga
                  reiciendis.
                  <br></br>
                  <br></br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, eius rerum ab illum consequuntur saepe, non vero quae
                  alias et rem porro? Deleniti inventore quaerat, asperiores
                  doloribus obcaecati fuga reiciendis.
                </h6>
              </div>

              <div className="block">
                <div className="servicios">
                  <ServiciosHistorias infoemprendimiento={infoemprendimiento} />
                  <ServiciosHistoriasInverted
                    infoemprendimiento={infoemprendimiento}
                  />
                </div>
              </div>

              <div className="block-btn">
                <Link className="boton-historia" to="/tienda">
                  <Button buttonType="default">VER TODOS LOS PRODUCTOS</Button>
                </Link>
                <Link className="boton-historia" to="/preventa">
                  <Button buttonType="inverted">IR A LA PREVENTA</Button>
                </Link>
              </div>

              <div className="block">
                <h2>Como nos puedes ayudar</h2>
                <h6 className="parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, eius rerum ab illum consequuntur saepe, non vero quae
                  alias et rem porro? Deleniti inventore quaerat, asperiores
                  doloribus obcaecati fuga reiciendis. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quidem, eius rerum ab illum
                  consequuntur saepe, non vero quae alias et rem porro? Deleniti
                  inventore quaerat, asperiores doloribus obcaecati
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  

  .title-historia {
    text-align: center;
  }

  .subcontainer-historia {
    width: 100%;
    height: 100%;
    display: flex;

    .listacontainer {
      width: 20%;
      height: auto;
      padding: 20px;
      background-color: ${(props) => props.theme.color4};

      .subtitle {
        padding: 10px 10px 20px 10px;
      }
      .emprendimiento {
        width: 100%;
        height: 65px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid rgb(194, 194, 194);
        border-radius: 8px;
        padding-left: 5px;
        cursor: pointer;

        &:visited{
          background-color: red;
        }

        .imagen {
          width: 50px;
          height: 45px;

          .img-item {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .product-info {
          width: 90%;
          padding: 0 0 0 20px;
          line-height: 20px;
        }
      }
      .active {
        width: 100%;
        height: 65px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid rgb(194, 194, 194);
        border-radius: 8px;
        padding-left: 5px;
        cursor: pointer;
        background-color: ${(props) => props.theme.color3};
        

        .imagen {
          width: 50px;
          height: 45px;

          .img-item {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .product-info {
          width: 90%;
          padding: 0 0 0 20px;
          line-height: 20px;
        }
      }
    }

    .history {
      width: 80%;
      height: auto;

      .portada-preventa {
        width: 100%;
        height: 300px;
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

      .title-emprendedor {
        position: relative;
      }
      .content {
        width: 55%;
        margin: 160px auto 20px;
        

        .block {
          margin-bottom: 30px;
        }

        .parrafo {
          margin-top: 10px;
          line-height: 20px;
        }
        .image {
          width: 100%;
          height: auto;
          object-fit: cover;

          .img-empre {
            width: 100%;
            height: 420px;
            object-fit: cover;
            border-radius: 20px;
          }
        }
        .boton-historia {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .block-btn{
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 30px;
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 400px;
  }
`;
