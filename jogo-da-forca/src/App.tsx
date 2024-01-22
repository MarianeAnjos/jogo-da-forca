import { styled } from 'styled-components';
import './App.css';
import HangmanDrawingComponent from './components/hangman-drawing';
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import React, { useCallback, useEffect, useState } from 'react';

// Estilo do componente principal
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

// Estilo do componente de desenho da forca
const HangmanDrawing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`;

// Palavras para serem adivinhadas
const words = ['aprovada'];

function App() {
  // Estado para a palavra a ser adivinhada
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Seleciona uma palavra aleatória do array 'words'
    return words[Math.floor(Math.random() * words.length)];
  });

  // Estado para as letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Letras incorretas (filtradas com base nas letras adivinhadas)
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // Letras corretas (filtradas com base nas letras adivinhadas)
  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  // Função para adicionar letras adivinhadas
  const addGuessedLetters = useCallback((letter: string) => {
    console.log('letra:', letter, guessedLetters);
    // Verifica se a letra já foi adivinhada antes de adicionar
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((guessedLetters) => [
      ...guessedLetters,
      letter,
    ]);
  }, [guessedLetters]);

  // Efeito para lidar com eventos de teclado
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // Verifica se a tecla pressionada é uma letra minúscula
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };
    console.log('Ativou event listener');
    document.addEventListener('keypress', handler);

    // Remove o event listener quando o componente é desmontado
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  // Função para calcular o valor inicial da quantidade de chutes
  const calculateInitialGuesses = () => {
    const minLength = wordToGuess.length;
    const initialGuesses = Math.max(minLength * 2, minLength + 1);
    return initialGuesses;
  };

  // Valor inicial da quantidade de chutes
  const initialGuesses = calculateInitialGuesses();

  // Verificações para determinar se o jogador perdeu ou venceu
  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) =>
    guessedLetters.includes(letter)
  );

  return (
    <Wrapper>
      {/* Mensagens de derrota e vitória */}
      {isLoser && "Recarregue para uma nova tentava. Boa sorte (: "}
      {isWinner && "SUPER COOOOOL!!! Atualize a Página para jogar novamente \\o/"}

      {/* Componentes da forca, palavra e teclado */}
      <HangmanDrawing>
        <h2> Jogo da forca - Mariane Anjos</h2>
        <HangmanDrawingComponent numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanDrawing>
      <Keyboard
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  );
}

export default App;
