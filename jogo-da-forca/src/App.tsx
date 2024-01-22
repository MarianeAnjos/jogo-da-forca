import { styled } from 'styled-components';
import './App.css';
import HangmanDrawingComponent from './components/hangman-drawing'; // Alterei o nome do componente
import HangmanWord from './components/hangman-word';
import Keyboard from './components/keyboard';
import { useCallback, useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const HangmanDrawing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`;

const words = ['betina'];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

    /*A função não é construida mais de uma vez por conta do callback*/
  const addGuessedLetters = useCallback((letter: string) => {
    console.log('letra:', letter, guessedLetters);
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((guessedLetters) => [
      ...guessedLetters,
      letter,
    ]);
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };
    console.log('Ativou event listener');
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  return (
    <Wrapper>
      <HangmanDrawing>
        <h2> Jogo da forca - Mariane Anjos</h2>
        <HangmanDrawingComponent numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanDrawing>
      <Keyboard />
    </Wrapper>
  );
}

export default App;
