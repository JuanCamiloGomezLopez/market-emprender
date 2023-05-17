import styled from "styled-components";
export function CardCategorie({text, Icon, setCategorie, categorie}) {
  return (
    <Container>
      <div 
      {...(text === categorie ? {className:"active"} : {className:"category"})}
      onClick={()=>setCategorie(text)}>
        <Icon className="icon"/>       
      </div>
      <h5>{text}</h5>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;

  .category {
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.theme.gray300};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .icon {
      width: 40px;
      height: 40px;
      color: #a1a1a1;
    }
  }

  .active {
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.theme.color3};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .icon {
      width: 40px;
      height: 40px;
      color: ${(props) => props.theme.color1};
    }
  }

  .category-select {
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.theme.color3};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .icon {
      width: 40px;
      height: 40px;
      color: #ffffff;
    }
  }
`;
