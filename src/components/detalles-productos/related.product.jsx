import styled from "styled-components";


import { CardRelated } from "./card.related.product";
export function RelateProducts({products_related}) {


  
  return (
    <Container_relate>
      <h1 className="text-relate">Productos relacionados</h1>
      <div className="related-productos-container">
      {products_related
          .filter((_, index) => index < 4)
          .map((item) => (
            <CardRelated key={item.id} item={item} products_related={products_related} />
          ))}         
      </div>
    </Container_relate>
  );
}
const Container_relate = styled.div`
  width: 100%;  

  .text-relate {
    text-align: center;
  }

  .related-productos-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;

    .card-related-product {
      width: 22%;
      height: 350px;
      background-color: ${(props) => props.theme.color4};
      border-radius: 10px;

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
        height: 200px;
        display: flex;
        justify-content: center;

        .product-img {
          width: 200px;
          object-fit: cover;
          object-position: bottom;
        }
      }

      .title-card {
        text-align: center;
        font-weight: 600;
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
    }
  }
`;
