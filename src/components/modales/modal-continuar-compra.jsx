import styled from "styled-components";
import addcar from "../../assets/addcar.svg";
import { Button } from "../Elements_IU/Buttons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectcartItems } from "../../store/cart/cart.selector";

export function ContinuarCompra({ openmodalcontinuar, setOpenmodalcontinuar, redireccion }) {
  const carritems = useSelector(selectcartItems);

  const arraycaritems = Object.values(carritems);

  const Cerrarmessage = () => {
    setOpenmodalcontinuar(false);
  };

  const open_modal_continuar = () => {};

  if (!openmodalcontinuar) {
    return;
  }

 
  return (
    <Container_Modal>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="subcontainer"
      >
        <div className="title-modal-carro">
          <img className="img-car" src={addcar} />
          <h3>Actualmente en tu carro</h3>
        </div>

        <div className="container-item-modal">
          {arraycaritems.map((item) => (
            <div className="container-car">
              <img className="product-img-car" src={item.imageUrl}></img>
              <div className="description-product">
                <h5>Pasteles y Tortas</h5>
                <p>{item.descripccion}</p>
              </div>
              <div className="count-container">
                <div className="count">
                  <h5>{item.quantity}</h5>
                </div>
              </div>

              <h3 className="price">${item.price_oferta}k</h3>
            </div>
          ))}
        </div>

        <div className="botones-modal">
          <Link to={redireccion}>
            <Button onClick={Cerrarmessage} buttonType="inverted">
              SEGUIR COMPRANDO
            </Button>
          </Link>

          <Link to="/checkout">
            <Button
              className="boton1"
              onClick={open_modal_continuar}
              buttonType="default"
            >
              IR AL CARRITO
            </Button>
          </Link>
        </div>
      </div>
    </Container_Modal>
  );
}
const Container_Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
  z-index: 20;

  .subcontainer {
    width: 600px;
    min-height: 430px;
    border-radius: 8px;
    position: fixed;
    opacity: 30;
    padding: 20px;
    background-color: white;
    position: relative;

    .title-modal-carro {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .img-car {
        width: 30px;
        margin-right: 10px;
      }
    }
    .container-item-modal {
      overflow-y: auto;
      height: 260px;
      
     

      .container-car {
        width: 100%;
        height: 80px;
        display: grid;
        grid-template-columns: 25% 35% 25% 15%;
        align-items: center;
        justify-content: space-around;
        margin-top: 20px;
        border-bottom: 1px solid rgb(209, 209, 209);
        

        .product-img-car {
          width: 90px;
          height: 70px;
          object-fit: cover;
          margin-left: 10px;
        }
        .price {
          margin-right: 10px;
        }
      }
    }

    .botones-modal {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      bottom: 20px;
      right: 20px;

      .boton1 {
        margin-left: 10px;
      }
    }
  }
`;
