import styled from "styled-components";

// Lista de teclas disponíveis
const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'ã',
  'õ',
  'ç',
  'é',
];

// Estilização do componente principal
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;  // Corrigido o ponto e vírgula aqui
  width: 600px;
`;

// Estilização do botão
const Button = styled.button<{ isActive: boolean }>`
  opacity: ${(p) => (p.isActive ? '1' : '0.3')};

  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`;

// Propriedades esperadas pelo componente Keyboard
interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters:(letter:string) => void
}

// Componente funcional Keyboard
export default function Keyboard({ activeLetters, inactiveLetters,addGuessedLetters, }: KeyboardProps) {
    return (
      <Wrapper>
        {keys.map((letter) => {
          const isActive = !activeLetters.includes(letter);
          const isInactive = !inactiveLetters.includes(letter);
  
          return (
            <Button onClick={()=> addGuessedLetters(letter) }
             isActive={isActive && isInactive} key={letter}>
              {letter.toUpperCase()}
            </Button>
          );
        })}
      </Wrapper>
    );
  }
