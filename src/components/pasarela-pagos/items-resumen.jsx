import styled from "styled-components";

export function ItemsResumen({ cartitem }) {
  const { imageUrl, producto, price_oferta, quantity } = cartitem;

  console.log(cartitem);
  return (
    <Container>
      <div className="imagen">
        <img className="img-item" src={imageUrl} />
      </div>
      <div className="product-info">
        <h5 className="description">{producto}  ({quantity})</h5>
        <h5 className="description">{price_oferta} k</h5>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 20px;

  .imagen {
    width: 10%;
    height: 100%;

    .img-item {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .product-info {
    width: 80%;
    margin-left: 5px;
    display: flex;
    justify-content: space-between;

    .description {
      padding: 2px 0;
    }
  }
`;
