import styled from "styled-components";

export function CarItemDropdown({cartitem}) {
    const { imageUrl, producto, price_oferta } = cartitem;

  return (
    <Container>
      <div className="imagen">
        <img className="img-item" src={imageUrl}/>
      </div>
      <div className="product-info">        
        <h5 className="description">{producto}</h5>
        <h4>${price_oferta}k</h4>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  
  padding: 5px;
 


  .imagen {
    width: 25%;
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
    width: 80%;
    margin-left: 5px;

    .description {
      padding: 2px 0;
    }
  }
`;
