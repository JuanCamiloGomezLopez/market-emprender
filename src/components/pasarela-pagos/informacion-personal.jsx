import styled from "styled-components";
import { useSelector } from "react-redux";

export function InformacionPersonal() {

  const currentuser = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <div className="datos">
        <div className="content-text">
          <h4>
            <strong>Email</strong>: {currentuser ? currentuser.email : "Sin información"}
          </h4>
        </div>
        <div className="content-text">
          <h4>
            <strong>Nombre</strong>: {currentuser ? currentuser.displayName : "Sin información"}
          </h4>
        </div>
        <div className="content-text-cel">
          <h4>
            <strong>Celular</strong>: xxxxxxxxxxxx
          </h4>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .datos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .content-text-cel{
    @media (max-width: 760px) {
      display: none;
    }
  }
  
`;
