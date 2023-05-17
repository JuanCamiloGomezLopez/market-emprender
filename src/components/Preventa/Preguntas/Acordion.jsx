import styled from "styled-components";
import { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Container_accordion open={open}>
      <div
        className="title-acordion"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-question">{title}</h4>

        {open ? (
          <div className="icono-flecha">
            <AiOutlineRight />
          </div>
        ) : (
          <div className="icono-flecha">
            <AiOutlineDown />
          </div>
        )}
        
      </div>

      <div className="linea"></div>

      <Reveal open={open}>
        <h5 className="text-answers">{children}</h5>
      </Reveal>
    </Container_accordion>
  );
}

const Container_accordion = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .title-acordion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    transition: all 0.5s;
    cursor: pointer;
    padding: 15px 0 12px 0;

    .text-question{
      color: ${(props) => props.theme.text};
      font-size: ${(props) => props.theme.fontxs};
      font-weight: 400;
    }
  
    .icono.flecha {
      color: ${(props) => props.theme.primary};
      width: 5px;
      margin-right: 20px;
    }
  }
  .linea{
    border-bottom: 1px solid rgb(219, 219, 219);
    display: ${({ open }) => (open === true ? `none` : `block`)};
  }
`;

const Reveal = styled.div`
  display: ${({ open }) => (open === true ? `inline-block` : `none`)};
  border-radius: 8px;
  background-color: ${(props) => props.theme.body};
  transition: all 0.5s;
  z-index: 10;
  border: 1px solid rgb(197, 197, 197);

  .text-answers{
    padding: 10px;
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 300;
    line-height: 20px;
  }

 
`;
