import styled from "styled-components";
import logo from "../../assets/logo_emprender.svg";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <Container>
        <img className="img-logo" src={logo} />
        <div className="content">
          <h2>Market Up</h2>
          <p>Enlace Emprendedor</p>
        </div>
      </Container>
    </Link>
  );
}
const Container = styled.div`
  width: 145px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img-logo {
    width: 35px;
    height: auto;
  }
  .content {
    

    p {
      font-weight: 300;
    }
  }
`;
