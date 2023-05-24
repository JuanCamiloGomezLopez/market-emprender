import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../Elements_IU/Buttons";
import { useState } from "react";
import { ContinuarCompra } from "../modales/modal-continuar-compra";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
export function ContentProduct({preventa_item}) {
  const [openmodalcontinuar, setOpenmodalcontinuar] = useState(false);

 const dispatch = useDispatch()

  const open_modal_continuar = () => {
    setOpenmodalcontinuar(true);
    dispatch(addItemToCart(preventa_item));
  };

  var redireccion = ""

  if(preventa_item.descripccion_total){
   redireccion = "/tienda"
  } else {
   redireccion = "/preventa"
  }
   
  return (
    <Container_product >
      <h1>{preventa_item.producto}</h1>
      <div className="stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className="price-product">
        <h2 className="price-old">${preventa_item.price_actual}k</h2>
        <h2 className="price-new">${preventa_item.price_oferta}k</h2>
      </div>

      <p className="parrafo">
      {preventa_item.descripccion}
      </p>

      <div className="nutritional">
        <div className="content-nutrition">
          <h5 className="text-nutrition">Tiempo de preparación:</h5>
          <h5>2 H 45 Min</h5>
        </div>

        <div className="content-nutrition">
          <h5 className="text-nutrition">Consumir antes de:</h5>
          <h5>3 Meses apartir de recibirlo</h5>
        </div>

        <div className="content-nutrition">
          <h5 className="text-nutrition">Tamaño del producto:</h5>
          <h5>20cm x 22cm x 10cm de altura</h5>
        </div>

        <div className="content-nutrition">
          <h5 className="text-nutrition">Información Nutricional:</h5>
          <h5>3% Azucar, 10% Proteina, 5% Carbohidratos</h5>
        </div>

        <div className="content-nutrition">
          <h5 className="text-nutrition">Stock Disponible:</h5>
          <h5>12 Und</h5>
        </div>

        <div className="content-nutrition">
          <h5 className="text-nutrition">Tiempo de envío</h5>
          <h5>2 dias</h5>
        </div>
      </div>

      <div className="count-container">
        <h5 className="counter-text">Cantidad:</h5>
        <div className="count">
          <input type="number" min={1} placeholder="2"></input>
        </div>

        <Button onClick={open_modal_continuar} buttonType="default">
          ADICIONAR AL CARRITO
        </Button>
      </div>
      <ContinuarCompra openmodalcontinuar={openmodalcontinuar} setOpenmodalcontinuar={setOpenmodalcontinuar} redireccion={redireccion}/>
    </Container_product>
  );
}
const Container_product = styled.div`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 760px) {
    margin-left: 0;
    margin-top: 20px;
      }

  .stars {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;
    color: ${(props) => props.theme.color3};
  }

  .parrafo {
    line-height: 20px;
    margin-bottom: 20px;
  }

  .nutritional {
    width: 100%;
    margin-bottom: 40px;
    line-height: 30px;

    .content-nutrition {
      display: flex;
      align-items: center;

      .text-nutrition {
        font-weight: 600;
        margin-right: 10px;
      }
    }
  }

  .price-product {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;

    .price-old {
      color: #b9b9b9;
      padding-right: 20px;
      width: 80px;
      position: relative;

      &::before {
        content: "";

        width: 70px;
        background-color: #b9b9b9;
        height: 2px;
        position: absolute;
        bottom: 10px;
      }
    }
    .price-new {
      color: ${(props) => props.theme.color1};
    }
  }

  .count-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .counter-text {
      font-weight: 600;
      margin-right: 10px;
    }

    .count {
      width: 70px;
      height: 45px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid ${(props) => props.theme.color1};
      margin-right: 20px;

      input {
        width: 50%;
        height: 100%;
        border: none;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }
`;
