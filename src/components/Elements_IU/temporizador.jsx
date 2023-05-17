import { useState } from "react";
import styled from "styled-components";
import { useInterval } from "usehooks-ts";

export function timeLeft() {
  const now = new Date();
  const end = new Date("May 19, 2023 23:59:00");

  const remainingTime = end.getTime() - now.getTime();

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  
  return { days, hours, minutes, seconds };
}

export const Tempo = () => {
  const [time, setTimer] = useState(timeLeft());

  useInterval(() => {
    setTimer(timeLeft());
  }, 1000);

  return (
    <Container_tempo>
      <h2>Vence en</h2>
      <div className="tempo">
        <h2 className="it">{time.days} d</h2>
        <h2 className="it">{time.hours} h</h2>
        <h2 className="it">{time.minutes} m</h2>
        <h2 className="it">{time.seconds} s</h2>
      </div>
    </Container_tempo>
  );
};

const Container_tempo = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tempo {
    display: flex;
    align-items: center;
    border: 1px solid rgb(175, 175, 175);
    border-radius: 5px;
    padding: 5px;
    .it {
      padding: 0 8px;
    }
  }
`;
