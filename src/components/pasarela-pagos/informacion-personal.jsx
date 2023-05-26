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
    justify-content: flex-start;
    padding: 20px;
    @media(max-width: 760px){
      flex-direction: column;
      padding:0;
    } 
  }
  .content-text{
    padding-right: 60px;
    @media(max-width: 760px){
      padding-right: 0;
      padding: 10px;
    } 
  }
  
`;
