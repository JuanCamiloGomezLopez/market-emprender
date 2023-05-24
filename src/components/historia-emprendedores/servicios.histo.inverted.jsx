import styled from "styled-components";
import { Fragment } from "react";

export function ServiciosHistoriasInverted({ infoemprendimiento }) {
  return (
    <Container_servicios_historias>
      {infoemprendimiento.map((item) => (
        <Fragment key={item.id}>
          <div className="content-service">
            <h3 className="title-product">
              {item.prodcutosdetacados[1].producto}
            </h3>
            <h6>{item.prodcutosdetacados[1].descripccionproducto}</h6>
          </div>

          <div className="imagen">
            <img
              className="img-papeleria"
              src={item.prodcutosdetacados[1].imagenproducto1}
            />
          </div>
        </Fragment>
      ))}
    </Container_servicios_historias>
  );
}
const Container_servicios_historias = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.gray300};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 760px) {
           height: 150px;
            }

  .imagen {
    width: 45%;
    height: 100%;

    .img-papeleria {
      width: 100%;
      object-fit: cover;
      height: 100%;
      border-radius: 10px;
    }
  }
  .content-service {
    width: 55%;
    padding: 40px;
    line-height: 20px;
    @media (max-width: 760px) {
            padding: 10px;
            }

    .title-product {
      margin-bottom: 10px;
    }
  }
`;
