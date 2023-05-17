import styled from "styled-components";
import { Button } from "../../Elements_IU/Buttons";
import {Link} from "react-router-dom"


export function Historias() {

  return (
    <Container_historias_preventa>
      <h2 className="title-history">Historias que valen</h2>

      <div className="imagen-history">
        <img className="img-history" src="https://i.ibb.co/NmDz10F/emprendedores.jpg"/>
      </div>

      <div className="content-history">
        <h4 className="title-content">Artesanias Santa Isabel</h4>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          lemporibus omnis fugit nemo voluptatum quidem nihil optio, fuga sit
          labore dicta totam aperiam. Non accusamus quae quo culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          libero, repellendus temporibus omnis fugit nemo voluptatum qnihil
          optio, fuga sit labore dicta totam aperiam. Non accusamus quae quo
          culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiit. Similique libero,
          repamus quae quo culpa.
        </p>

        <div className="button-content">
          <Link to="/historias">
          <Button buttonType="default">
            VER TODAS
          </Button>
          </Link>
          
        </div>
      </div>
    </Container_historias_preventa>
  );
}
const Container_historias_preventa = styled.div`
  width: 100%;
 
  padding: 0 0 10px 0;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;

  .title-history {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;    
  }

  .imagen-history {
    width: 90%;
    height: 180px;     
    margin: 0 auto;
    margin-top: 10px;

    .img-history{
      width: 100%;
      height: 105%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .content-history {
    width: 90%;
    text-align: justify;
    margin: 0 auto;
    margin-top: 10px;
    line-height: 15px;

    .title-content {
      padding: 10px 0;
      text-align: center;
    }

    .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
       
     
      
    }
  }
`;
