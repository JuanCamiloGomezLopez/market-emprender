import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import next from "../../../assets/next.svg";
import back from "../../../assets/back.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { selectEmprendimientosMap } from "../../../store/emprendimientos-list/list.selector";
import { useSelector } from "react-redux";


export function List_Emprendimiento({ getname, setGetname, setGetimage }) {

  const listadeemprendedores = useSelector(selectEmprendimientosMap);
  const valoreslistadeemprendedores = Object.values(listadeemprendedores)

  return (
    <Container getname={getname}>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {valoreslistadeemprendedores.map((item) => (
          <SwiperSlide key={item[0].id}>
            <div
              onClick={() => {
                setGetname(item[0].emprendimiento);
                setGetimage(item[0].imageUrllogo);
              }}
              className="emprendimiento"
            >
              <div className="imagen">
                <img className="img-item" src={item[0].imageUrllogo} />
              </div>
              <div className="product-info">
                <h4>
                  <strong>{item[0].emprendimiento}</strong>
                </h4>
                <p className="description">{item[0].descripccion}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: rgb(239, 240, 241);
  display: flex;
  align-items: center;

  .emprendimiento {
    width: 230px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-radius: 8px;
    padding: 0 10px;
    cursor: pointer;

    .img-item {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 8px;
    }
    h4 {
      margin-left: 10px;
      margin-bottom: 3px;
    }
    p {
      margin-left: 10px;
    }
  }

  .select {
    width: 100px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color3};
    cursor: pointer;
  }
  .swiper-button-next {
    background-image: url(${next});
    background-image: center;
    background-size: cover;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 40px;
    &::after {
      display: none;
    }
  }

  .swiper {
    padding-left: 70px;
  }

  .swiper-slide {
  }
  .swiper-button-prev {
    background-image: url(${back});
    background-size: cover;
    width: 30px;
    height: 30px;
    left: 20px;
    top: 40px;
    &::after {
      display: none;
    }
  }
`;
