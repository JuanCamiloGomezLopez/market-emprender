import styled from "styled-components";
export function CarItem({cartitem}) {
    const { emprendimiento, imageUrl, producto, price_oferta } = cartitem;


  return (
    <Container>
      <div className="imagen">
        <img className="img-item" src={imageUrl}/>
      </div>
      <div className="product-info">
        <h4><strong>{emprendimiento}</strong></h4>
        <p className="description">{producto}</p>
        <h4>${price_oferta}k</h4>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;

  .imagen {
    width: 35%;
    height: 90%;
    margin: auto 0;   

    .img-item{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;        
    }
  }
  .product-info {
    width: 60%;
    padding: 10px;
    white-space: nowrap;

    .description {
      padding: 10px 0;
    }
  }
`;
