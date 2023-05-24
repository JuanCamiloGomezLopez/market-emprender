import styled from "styled-components";
export function CategorieItem({ titulo, Icon }) {
  return (
    <Container_categorieItem>
      <div className="actividad">
        <Icon className="feria" />
      </div>
      <div className="text">
        <h3 className="title-actividad">{titulo}</h3>
      </div>
    </Container_categorieItem>
  );
}
const Container_categorieItem = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  
  @media (max-width: 760px) {
  
   width: 95%;
  
  }

  .actividad {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.color3};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 760px) {
    width: 70px;
    height: 70px;
  }

    .feria {
      width: 40%;
      height: 40%;
      color: ${(props) => props.theme.color3};
    }
  }
  .text {
    margin-top: 10px;

    .title-actividad {
        color: ${(props) => props.theme.color2};
      line-height: 25px;

      @media (max-width: 760px) {
    font-size: 12px;
  }
    }
  }
`;
