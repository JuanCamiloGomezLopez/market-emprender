import styled from "styled-components";
import { ContentProduct } from "../components/detalles-productos/content.product";
import { RelateProducts } from "../components/detalles-productos/related.product";
import { Questions } from "../components/Preventa/Preguntas/questions";
import { Footer } from "../components/Preventa/footer/footer";
import { useLocation } from "react-router-dom";
import { PromocionPreventa } from "../components/Preventa/promocion-preventa";
import { NavbarComponent } from "../components/Elements_IU/navbarcomponent/Navbar.tipico";
export function DetailProduct() {
  const location = useLocation();

  const { product_detail } = location.state || [];
  const { products_related } = location.state || [];

  return (
    <Container_detail>
      <div className="navbar-container">
        <NavbarComponent />
      </div>
      <PromocionPreventa />

      <div className="product-container">
        <div className="image-product">
          <img className="img-product-preventa" src={product_detail.imageUrl} />
        </div>
        <div className="info-product">
          <ContentProduct preventa_item={product_detail} />
        </div>
      </div>

      <div className="relateproducts-container">
        <RelateProducts products_related={products_related} />
      </div>

      <Questions />
      <Footer />
    </Container_detail>
  );
}
const Container_detail = styled.div`
  width: 100%;

  .navbar-container {
    width: 100%;
    height: 80px;
  }

  .product-container {
    width: 100%;
    padding: 40px 160px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 760px) {
      flex-direction: column;
      padding: 0;
      width: 95%;
      margin: 0 auto;
      margin-top: 80px;
    }

    .image-product {
      width: 40%;
      height: 420px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.color4};

      @media (max-width: 760px) {
        width: 100%;
        height: 250px;
      }

      .img-product-preventa {
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
    padding: 0 140px;
    @media (max-width: 760px) {
      padding: 0;
      margin-top: 80px;
    }
  }
`;
