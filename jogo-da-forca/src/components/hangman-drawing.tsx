import styled from "styled-components";

// Componente para a base da forca
const Base = styled.div`
  height: 10px;
  width: 250px;
  background: black;
  margin-left: -50px;
`;

// Componente para a linha vertical longa
const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background: blue;
`;

// Componente para a linha horizontal curta
const HorizontalLine = styled.div`
  height: 10px;
  width: 290px;
  background: blue;
  position: absolute;
  right: 80px;
  top: 0;
`;

// Componente para a linha vertical pequena
const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  background: blue;
  margin-left: 150px;
  position: absolute;
  right: 80px;
  top: 0;
`;

// Componente para a cabeça
const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid orange;
  border-radius: 50%;
  position: absolute;
  top: 46px;
  left: 71;
  right: 67px;
`;

// Componente para o corpo
const Body = styled.div`
  height: 80px;
  width: 10px;
  background: orange;
  position: absolute;
  top: 77px;
  right: 77px;
`;

// Componente para o braço direito
const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background: orange;
  position: absolute;
  top: 80px;
  right: 37px;
  transform: rotate(-30deg);
`;

// Componente para o braço esquerdo
const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background: orange;
  position: absolute;
  top: 80px;
  right: 77px;
  transform: rotate(30deg);
`;

// Componente para a perna direita
const RightLeg = styled.div`
  height: 10px;
  width: 50px;
  background: orange;
  position: absolute;
  top: 157px;
  right: 80px;
  transform: rotate(-25deg);
`;

// Componente para a perna esquerda
const LeftLeg = styled.div`
  height: 10px;
  width: 50px;
  background: orange;
  position: absolute;
  top: 157px;
  right: 35px;
  transform: rotate(25deg);
`;

// Lista de partes do corpo
const bodyParts = [Head, Body, RightArm, LeftArm, RightArm, RightLeg, LeftLeg];

// Props esperadas para o componente HangmanDrawing
interface HangmanDrawingProps {
  numberOfGuesses: number;
}

// Componente principal para renderizar o desenho da forca
export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
        return <BodyParty key={index} />;
      })}

      <VerticalLineSmall />
      <VerticalLine />
      <HorizontalLine />
      <Base />
    </div>
  );
}
