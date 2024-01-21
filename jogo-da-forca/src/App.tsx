import { styled } from 'styled-components'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`




function App() {
    return (
      <Wrapper>
        <h2> Jogo da forca - Mariane Anjos</h2>

        {/* Construção dos componentes */}
        <HangmanDrawing/>
        <HangmanWord/>
        <Keyboard/>
      </Wrapper>

  )
}

export default App


