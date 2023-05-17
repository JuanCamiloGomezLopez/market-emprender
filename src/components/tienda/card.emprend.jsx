import styled from "styled-components";
import { AiFillStar, AiOutlineStar, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { ButtonCar } from "../Elements_IU/Buttons-car";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

export function CardEmprendimiento({ item, categorie, maps }) {
  const dispatch = useDispatch();
  const hola = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <Container>
      <Fragment>
        <div className="category">
          <h6 className="like-text">254 Likes</h6>
          <AiFillLike className="like" />
        </div>

        <Link  to="/product" state={{product_detail: item, products_related: maps[categorie]}}>
          <div className="imagen-relate">
            <img className="product-img" src={item.imageUrl}></img>
          </div>
        </Link>

        <h5 className="title-card">{item.producto}</h5>
        <div className="linea"></div>

        <div className="price-star">
          <div className="price-product">
            <h5>Desde </h5>
            <h2 className="price-new">${item.price_oferta}k</h2>
          </div>

          <div className="only-stars">
            <AiFillStar className="stars" />
            <AiFillStar className="stars" />
            <AiFillStar className="stars" />
            <AiFillStar className="stars" />
            <AiOutlineStar className="stars" />
          </div>
        </div>

        <div className="content-nutrition">
          <h5>
            <strong>Ciudad: </strong>
          </h5>
          <h5 className="text">Medellin</h5>
        </div>
        <div className="content-empre">
          <h5>
            <strong>Emprendimiento: </strong>
          </h5>
          <h5 className="text">{item.emprendimiento}</h5>
        </div>
        <div className="btn">
          <ButtonCar
            onClick={hola}
            buttonType="default"
            children="agregar al carro"
          />
        </div>
      </Fragment>
    </Container>
  );
}
const Container = styled.div`
  min-width: 22%;
  height: 435px;
  background-color: ${(props) => props.theme.color4};
  border-radius: 10px;
  margin-top: 20px;

  .category {
    width: 85px;
    height: 25px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color3};
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 20px 0 10px 20px;

    .like {
      width: 18px;
      color: ${(props) => props.theme.color1};
    }
    .like-text {
      color: ${(props) => props.theme.color1};
    }
  }

  .imagen-relate {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;

    .product-img {
      width: 200px;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
      border-radius: 8px;
    }
  }

  .title-card {
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
  }

  .linea {
    border-bottom: 1px solid rgb(219, 219, 219);
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }

  .price-star {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 15px;

    .price-product {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .price-new {
      color: ${(props) => props.theme.color1};
      font-size: 15px;
      margin-left: 5px;
    }
  }
  .only-stars {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .stars {
      color: ${(props) => props.theme.color3};
    }
  }

  .content-nutrition {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 15px;
    margin-top: 10px;

    .text {
      margin-left: 5px;
    }
  }
  .content-empre {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    .text {
      margin-left: 5px;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
