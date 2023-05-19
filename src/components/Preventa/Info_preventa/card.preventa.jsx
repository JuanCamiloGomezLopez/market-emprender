import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonCar } from "../../Elements_IU/Buttons-car";
import { addItemToCart } from "../../../store/cart/cart.reducer";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  setSigninOpen,
  setItemcurrentUser,
  setUseruid,
} from "../../../store/user/user.reduce";
import {
  selectListUser,
  selectItemUser,
  selectIsSiginOpen,
  selectuseruid,
} from "../../../store/user/user.selector";
import { handleEdit, deletefavorite } from "../../../utils/firebase.utils";
import { useEffect } from "react";

export function CardPreventa({ preventa_item, preventa }) {
  const {
    imageUrl,
    price_actual,
    price_oferta,
    producto,
    descripccion,
    cant_max,
  } = preventa_item;
  const dispatch = useDispatch();
  const currentuser = useSelector((state) => state.user.currentUser);
  const isopensign = useSelector(selectIsSiginOpen);
  const listadeusuarios = useSelector(selectListUser);
  const itemsdeusuarios = useSelector(selectItemUser);
  const useruid = useSelector(selectuseruid);

  useEffect(() => {
    if (currentuser) {
      listadeusuarios.map((item) => {
        if (item.email === currentuser.email) {
          dispatch(setUseruid(item.uid));
          dispatch(setItemcurrentUser(item));
        }
      });
    }
  }, []);

  const pushfavorite = () => {
    try {
      if (currentuser) {
        if (!itemsdeusuarios[producto]) {
          handleEdit(preventa_item, useruid);
          console.log("se envio a bd");
        } else if (itemsdeusuarios[producto]) {
          deletefavorite(preventa_item, useruid);
          console.log("se elimino de bd");
        }
      } else {
        dispatch(setSigninOpen(!isopensign));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProductTocar = () => {
    dispatch(addItemToCart(preventa_item));
  };

  return (
    <Container_cardPreventa>
      {itemsdeusuarios[producto] ? (
        <AiFillHeart className="corazon" onClick={pushfavorite} />
      ) : (
        <AiOutlineHeart className="corazon-vacio" onClick={pushfavorite} />
      )}
      <Link
        to="/product"
        state={{ product_detail: preventa_item, products_related: preventa }}
      >
        <div>
          <img className="img-caja" src={imageUrl} />
        </div>
      </Link>

      <div className="content-card">
        <div className="info-caja">
          <h4>
            <strong>{producto}</strong>
          </h4>
          <h6>{descripccion}</h6>
          <div className="price-product">
            <h2 className="price-old">${price_actual}k</h2>
            <h2 className="price-new">${price_oferta}k</h2>
          </div>
        </div>
        <div className="information">
          <h6>Stock</h6>
          <h4>
            <strong>{cant_max} Und</strong>
          </h4>
          <ButtonCar onClick={addProductTocar} buttonType="amarillo">
            COMPRAR
          </ButtonCar>
        </div>
      </div>
    </Container_cardPreventa>
  );
}
const Container_cardPreventa = styled.div`
  border-radius: 10px;
  height: 270px;
  background-color: ${(props) => props.theme.color5};
  position: relative;
  display: inline-block;
  z-index: 0;
  transition: all 0.3s;

  @media (max-width: 760px) {
    width: 175px;
    height: auto;
    justify-content: center;
  }
  &:hover {
    transform: scale(1.05);
  }

  .corazon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.color3};
  }
  .corazon-vacio {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.gray300};
  }

  .img-caja {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin: 0 auto;

    @media (max-width: 760px) {
    
    height: 150px;
   
  }
  }

  .titulo {
    width: 100%;
    color: white;
    z-index: 10;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    justify-content: flex-start;

    .icon {
      margin-left: 150px;
      width: 40px;
      height: 20px;
    }
  }

  .content-card {
    display: flex;
    align-items: center;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    .info-caja {
      width: 70%;
      height: 90px;
      padding: 10px;
      line-height: 20px;
      z-index: 5;
      @media (max-width: 760px) {
        width: 100%;
      }
    }
    .information {
      line-height: 20px;
      text-align: center;

      @media (max-width: 760px) {
       display: flex;
       justify-content: space-between;
       padding: 0 10px;
       width: 100%;
       margin-bottom: 10px;
      }
    }
  }

  .price-product {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;

    .price-old {
      color: #b9b9b9;
      position: relative;
      font-size: 15px;
      margin-right: 10px;

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
      font-size: 15px;
    }
  }
`;
