import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ButtonCar } from "../Elements_IU/Buttons-car";
import {Link} from "react-router-dom"

export function CardRelated({ item, products_related }) {

  return (
    <Container>
      <div className="imagen-relate">
        <img className="product-img" src={item.imageUrl}></img>
      </div>

      <h5 className="title-card">{item.producto}</h5>
      <p className="subtitle">{item.descripccion}</p>

      <div className="linea"></div>

      <div className="price-star">
        <div className="price-product">
          <h2 className="price-old">${item.price_actual}k</h2>
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

      <Link to="/product" state={{product_detail: item, products_related: products_related}}>
        <div className="btn-vermas">
          <ButtonCar buttonType="default">VER MAS INFORMACIÓN</ButtonCar>
        </div>
      </Link>   

    
    </Container>
  );
}
const Container = styled.div`
  width: 22%;
  height: auto;
  background-color: ${(props) => props.theme.color4};
  border-radius: 10px;

  .title {
    color: white;
  }

  .category {
    width: 80px;
    height: 25px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color1};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 20px 0 0 20px;
  }

  .imagen-relate {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    padding: 10px;

    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
      border-radius: 8px;
    }
  }

  .title-card {
    text-align: center;
    font-weight: 600;
    margin: 10px 0 10px 0;
  }
  .subtitle {
    margin-left: 10px;
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
    .only-stars {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .stars {
        color: ${(props) => props.theme.color3};
      }
    }
  }

  .content-nutrition {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 15px;
    margin-top: 10px;

    .text-nutrition {
      font-weight: 600;
      margin-right: 10px;
    }
  }

  .btn-vermas {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    
  }
`;
