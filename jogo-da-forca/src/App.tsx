import { styled } from 'styled-components'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`


const HanfmanPart = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
widith:375px;
`

function App() {
    return (
      <>
        <Wrapper/>
          <HanfmanPart>
            <h2> Jogo da forca - Mariane Anjos</h2>
            {/* Construção dos componentes */}
            <HangmanDrawing/>
            <HangmanWord/>
            </HanfmanPart>
            <Keyboard/>
      </>
  )
}

export default App


