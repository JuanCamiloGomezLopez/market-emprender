import styled from "styled-components";
import { Navbar_Preventa } from "../components/Preventa/Navbar_preventa/navbar_preventa";
import { ContentProduct } from "../components/detalles-productos/content.product";
import { RelateProducts } from "../components/detalles-productos/related.product";
import { Questions } from "../components/Preventa/Preguntas/questions";
import { Footer } from "../components/Preventa/footer/footer";
import { useLocation } from "react-router-dom";
import { PromocionPreventa } from "../components/Preventa/promocion-preventa";
export function DetailProduct() {
  const location = useLocation()

  const { product_detail } = location.state || []; 
  const { products_related } = location.state || []; 

 
  return (
    <Container_detail>
      <div className="navbar-container">
        <Navbar_Preventa />
      </div>
      <PromocionPreventa />
      <div className="product-container">
        <div className="image-product">
          <img className="img-product-preventa" src={product_detail.imageUrl}/>
        </div>
        <div className="info-product">
          <ContentProduct preventa_item={product_detail}/>
        </div>
      </div>
      <div className="relateproducts-container">
        <RelateProducts products_related={products_related}/>
      </div>
      <div className="question-detail">
        <Questions />
      </div>
      <div className="footer-detail">
        <Footer />
      </div>
    </Container_detail>
  );
}
const Container_detail = styled.div`
  width: 100%;

  .navbar-container {
    width: 100%;
    height: 80px;
  }
  .portada-preventa {
    width: 100%;
    height: 200px;
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
      object-position: bottom;
      position: absolute;
      z-index: 0;
    }
  }

  .product-container {
    width: 100%;
    height: 700px;
    padding: 40px 160px;
    display: flex;
    align-items: center;
    justify-content: center;


    .image-product {
      width: 40%;
      height: 420px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.color4};
 
     

      .img-product-preventa{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .info-product {
      width: auto;
      margin-left: 20px;

    }
  }

  .relateproducts-container {
    width: 100%;
    height: 500px;
    padding: 0 140px; 
  }

  .question-detail {
    margin-top: 40px;
    padding: 0 70px;
  }
  .footer-detail {
    margin-top: 40px;
    width: 100%;
    height: 400px;
  }
`;
