import styled from "styled-components";
export function InformacionEventos() {
  return (
    <ContainerInfo>
      <div className="complet-container">
        <h1 className="title-main">Un lugar para todos!</h1>

        <div className="subcontainer-info">
          <div className="box1">
            <h2 className="title-info">Un lugar para todos</h2>
            <h5 className="subtitle-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              ea. Non minima ab, aut quibusdam reiciendis soluta nihil esse
              veniam illo recusandae repellat perspiciatis explicabo quam
              provident quasi quae sint! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nihil, ea. Non minima ab, aut quibusdam
              reiciendis soluta nihil esse veniam illo recusandae repellat
              perspiciatis explicabo quam provident quasi quae sint! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ea. Non
              minima ab, aut quibusdam reiciendis soluta nihil esse veniam illo
              recusandae repellat perspiciatis explicabo quam provident quasi
              quae sint!
            </h5>
          </div>

          <div className="box1">
            <h2 className="title-info">Un lugar para todos</h2>
            <h5 className="subtitle-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              ea. Non minima ab, aut quibusdam reiciendis soluta nihil esse
              veniam illo recusandae repellat perspiciatis explicabo quam
              provident quasi quae sint! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nihil, ea. Non minima ab, aut quibusdam
              reiciendis soluta nihil esse veniam illo recusandae repellat
              perspiciatis explicabo quam provident quasi quae sint! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Nihil, ea. Non
              minima ab, aut quibusdam reiciendis soluta nihil esse veniam illo
              recusandae repellat perspiciatis explicabo quam provident quasi
              quae sint! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Nihil, ea. Non minima ab, aut quibusdam reiciendis soluta
              nihil esse veniam illo recusandae repellat perspiciatis explicabo
              quam provident quasi quae sint!
            </h5>
          </div>
        </div>
      </div>
    </ContainerInfo>
  );
}
const ContainerInfo = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.color1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

.complet-container{
    padding: 0 80px;

     .title-main {
    color: white;
    text-align: center;
    margin-bottom: 30px;
  }

  .subcontainer-info {
    height: 95%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  

    .box1 {
      width: 50%;
      height: 100%;
      padding: 0 40px;
      text-align: justify;

      .title-info {
        text-align: center;
        color: white;
        margin-bottom: 20px;
      }
      .subtitle-info {
        color: white;
      }
    }
  } 
}

`;
