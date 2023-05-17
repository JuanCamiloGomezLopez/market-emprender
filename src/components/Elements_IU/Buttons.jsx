import styled from "styled-components";

export function Button ({ children, buttonType, ...otherprops }){

  const BUTTON_TYPE_CLASSES = {
    amarillo: "amarillo",
    inverted: "inverted",
    facebook: "facebook",
    google: "google",
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
    min-width: 165px;
    height: 45px;
    letter-spacing: 0.1px;    
    padding: 0 35px;
    font-size: 13px;    
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

    &.facebook {
      background-color: #3b5998;
      color: white;
   

      &:hover {
        background-color: #425e9b;
        color: white;
        border: none;
      }
    }

    &.google {
      background-color: #ff2f2f;
      color: white;
   

      &:hover {
        background-color: #f73737;
        color: white;
        border: none;
      }
    }
  
`;


