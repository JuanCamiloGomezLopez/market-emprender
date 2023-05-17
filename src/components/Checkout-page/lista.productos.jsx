import styled from "styled-components";
import { clearItemfromCar, addItemToCart, removetemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export function ListProducts({ cartitem }) {
  const dispatch = useDispatch();

  const {    
    imageUrl,
    price_actual,
    price_oferta,
    producto,
    descripccion,
    quantity,
  } = cartitem;
  return (
    <Container_list_products>
      <div className="container-car">
        <img className="product-img-car" src={imageUrl}></img>
        <div className="description-product">
          <h4>
            <strong>{producto}</strong>
          </h4>
          <h6>{descripccion}</h6>
          <p className="link-terminos">Ver terminos y condiciones</p>
        </div>
        <div className="count-container">
          <AiOutlineLeft
            onClick={() => dispatch(removetemToCart(cartitem))}
            className="flecha"
          />
          <span>{quantity}</span>
          <AiOutlineRight
            onClick={() => dispatch(addItemToCart(cartitem))}
            className="flecha"
          />
        </div>      

        <div className="price-product">
          <h2 className="price-old">${price_actual}k</h2>
          <h2 className="price-new">${price_oferta}k</h2>
          <h6
            onClick={() => dispatch(clearItemfromCar(cartitem))}
            className="delete-product"
          >
            Eliminar producto
          </h6>
        </div>
      </div>
    </Container_list_products>
  );
}
const Container_list_products = styled.div`
  width: 100%;
  max-height: 500px;  
  padding: 0 20px 20px 20px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  

  .container-car {
    width: 100%;
    height: 120px;
    display: grid;
    grid-template-columns: 25% 35% 15% 25%;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgb(194, 194, 194);
    background-color: white;
    margin-top: 20px;

    .description-product {
      max-width: 400px;
      line-height: 18px;

      .link-terminos {
        cursor: pointer;
        color: ${(props) => props.theme.color1};
      }
    }

    .product-img-car {
      width: 100px;
      height: 80px;
      object-fit: cover;
      margin-left: 20px;
      border-radius: 5px;
    }
    .price {
      margin-right: 20px;
    }

    .count-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid ${(props) => props.theme.color1};
      width: 70px;
      height: 45px;
      border-radius: 8px;

      span{
        padding: 0 5px;
      }
      .flecha{
        color: gray;
        cursor: pointer;
      }
    }

    .price-product {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      align-items: center;

      .price-old {
        color: #b9b9b9;
        position: relative;
        margin-bottom: 5px;
        font-size: 16px;

        &::before {
          content: "";
          width: 50px;
          background-color: #b9b9b9;
          height: 1px;
          position: absolute;
          bottom: 10px;
        }
      }
      .price-new {
        color: ${(props) => props.theme.color1};
        margin-bottom: 10px;
        font-size: 16px;
      }

      .delete-product {
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
`;
