import styled from "styled-components";


export function FormInput({ ...otherProps }) {
  return (
    <Container>
      <input className="form-input" {...otherProps} />
     
    </Container>
  );
}
const Container = styled.div`
  
   input {
        border: 1px solid rgb(202, 202, 202);
        height: 45px;
        border-radius: 8px;
        width: 100%;
        font-size: 0.7em;
        background-color: ${(props) => props.theme.body};
        color: ${({ theme }) => theme.text};
        padding: 0 10px;
        &:focus {
          outline: none;
          border: 1px solid ${(props) => props.theme.primary};
          background-color: white;
        }
      }

`;
