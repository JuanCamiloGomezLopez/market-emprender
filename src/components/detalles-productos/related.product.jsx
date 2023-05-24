import styled from "styled-components";

import { CardRelated } from "./card.related.product";
export function RelateProducts({ products_related }) {
  return (
    <Container_relate>
      <h1 className="text-relate">Productos relacionados</h1>
      <div className="related-productos-container">
        {products_related
          .filter((_, index) => index < 4)
          .map((item) => (
            <CardRelated
              key={item.id}
              item={item}
              products_related={products_related}
            />
          ))}
      </div>
    </Container_relate>
  );
}
const Container_relate = styled.div`
  width: 100%;

  .text-relate {
    text-align: center;
    @media (max-width: 760px) {
    font-size: 20px;
    }
  }

  .related-productos-container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 760px) {
      width: 95%;
      margin: 0 auto;
    }

  }
`;
