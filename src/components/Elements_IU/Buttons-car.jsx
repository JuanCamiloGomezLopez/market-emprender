import styled from "styled-components";

export function ButtonCar ({ children, buttonType, ...otherprops }){

  const BUTTON_TYPE_CLASSES = {
    amarillo: "amarillo",
    inverted: "inverted",
  };

  return (
    <Button_styled
      className={BUTTON_TYPE_CLASSES[buttonType]}
      {...otherprops}
    >
      {children}
    </Button_styled>
  );
};

const Button_styled = styled.button`   
    
    height: 30px;
    letter-spacing: 0.1px;    
    padding: 0 15px;
    font-size: 9px;    
    background-color: ${(props) => props.theme.color1};
    color: white;
    text-transform: uppercase;   
    font-weight: bolder;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color1};
      border: 1px solid ${(props) => props.theme.color1};
    }

    &.amarillo {
      background-color: ${(props) => props.theme.color3};
      color: ${(props) => props.theme.color1};

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.color1};
      border: 1px solid black;;       
      }
    }

    &.inverted {
      background-color: white;
      color: ${(props) => props.theme.color1};
      border: 1px solid black;

      &:hover {
        background-color: ${(props) => props.theme.color1};
        color: white;
        border: none;
      }
    }
  
`;


