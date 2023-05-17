import styled from "styled-components";
export function Footer() {
  return (
    <Container_Footer>
      <h1 className="titlefooter">FOOTER</h1>
    </Container_Footer>
  );
}
const Container_Footer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color1};
  display: flex;
  align-items: center;
  justify-content: center;

  .titlefooter {
    color: white;
  }
`;
