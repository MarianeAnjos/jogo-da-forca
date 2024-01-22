import styled from "styled-components";

/* Construção dos mostradores de letras */

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 4rem;
  font-weight: bold;  // Corrigido: 'font-weigth' para 'font-weight'
  text-transform: uppercase;
  font-family: sans-serif;
`;

interface HangManWordProps {
  word: string;
  guessedLetters: string[];
}

export default function HangmandWord({ word, guessedLetters }: HangManWordProps) {
  /* visibility hidden - deixa a palavra invisível */
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: "0.1em solid black",
            height: "50px",
            minWidth: "50px",
          }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
            }}  // Corrigido: 'visiblility' para 'visibility'
          >
            {letter}
          </span>
        </span>
      ))}
    </Wrapper>
  );
}
