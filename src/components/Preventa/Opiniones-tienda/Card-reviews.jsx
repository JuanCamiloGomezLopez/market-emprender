import styled from "styled-components";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillLike,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import { useState } from "react";
export function CardReviews() {
  const [opencard, setOpencard] = useState(true);

  return (
    <Container_card_review_preventa opencard={opencard}>

      <h4 className="title-cardview">Pasteles Tortas</h4>
      <div className="container-stars">
        <div className="only-stars">
          <AiFillStar className="stars" />
          <AiFillStar className="stars" />
          <AiFillStar className="stars" />
          <AiFillStar className="stars" />
          <AiOutlineStar className="stars" />
        </div>
        <h6>4.5 de 5</h6>
      </div>
      <div className="opinionesclick">
        <p className="text-opiniones">45 Opiniones</p>
        <AiOutlineDown
          onClick={() => setOpencard(!opencard)}
          className="down-up"
        />
      </div>

      <div className="allreview">
        <div className="list-reviews">
          <div className="numberstars">
            <h6>5 Stars</h6>
            <div className="rating-progress"></div>
            <h6>85%</h6>
          </div>
        </div>

        <div className="list-reviews">
          <div className="numberstars">
            <h6>4 Stars</h6>
            <div className="rating-progress"></div>
            <h6>7%</h6>
          </div>
        </div>

        <div className="list-reviews">
          <div className="numberstars">
            <h6>3 Stars</h6>
            <div className="rating-progress"></div>
            <h6>5%</h6>
          </div>
        </div>

        <div className="list-reviews">
          <div className="numberstars">
            <h6>2 Stars</h6>
            <div className="rating-progress"></div>
            <h6>2%</h6>
          </div>
        </div>

        <div className="list-reviews">
          <div className="numberstars">
            <h6>1 Stars</h6>
            <div className="rating-progress"></div>
            <h6>1%</h6>
          </div>
        </div>

        <div className="container-likes">
          <p className="text-likes">525 Likes</p>
          <AiFillLike className="like" />
        </div>
      </div>
    </Container_card_review_preventa>
  );
}
const Container_card_review_preventa = styled.div`
  width: 90%;  
  margin: 0 auto;
  border-radius: 8px;
  margin-top: 20px;
  z-index: 10;
  

  .title-cardview {
    text-align: center;
    padding: 10px 0;
  }

  .container-stars {
    width: 90%;
    height: 30px;
    background-color: #f3f3f3;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .only-stars {
      width: 50%;
      background-color: #f3f3f3;
      border-radius: 5px;
      display: flex;
      align-items: center;

      .stars {
        color: ${(props) => props.theme.color3};
      }
    }
  }
  .opinionesclick {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 7px;
    padding: 0 15px;

    .down-up {
      width: 10px;
    }

    .text-opiniones {
      text-align: center;

      color: ${(props) => props.theme.gray400};
    }
  }

  .allreview {
    position: relative;
    z-index: 10;
    background-color: white;
    display: ${({ opencard }) => (opencard ? `none` : `block`)};

    .list-reviews {
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;

      &:nth-last-child(1) .rating-progress::before {
        width: 10px;
      }
      &:nth-last-child(2) .rating-progress::before {
        width: 40px;
      }
      &:nth-last-child(3) .rating-progress::before {
        width: 60px;
      }
      &:nth-last-child(4) .rating-progress::before {
        width: 80px;
      }
      &:nth-last-child(5) .rating-progress::before {
        width: 95px;
      }

      .numberstars {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .rating-progress {
          margin: 0 2px;
          background-color: ${(props) => props.theme.gray400};
          border-radius: 2px;
          width: 95px;
          height: 4px;
          position: relative;

          &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 4px;
            background-color: ${(props) => props.theme.color3};
            border-radius: 2px;
          }
        }
      }
    }
    .container-likes {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 0 10px;

    .text-likes {
      margin-right: 20px;
    }
    .like {
      color: ${(props) => props.theme.gray400};
    }
  }
  }

  
`;
