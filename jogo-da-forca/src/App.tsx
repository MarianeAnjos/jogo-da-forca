import './App.css'
import HangmanDrawing from './components/hangman-Drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'

function App() {
    return (
    <>
      <div className="app">
        <h2> Jogo da forca - Mariane Anjos</h2>

        {/* Construção dos componentes */}
        <HangmanDrawing/>
        <HangmanWord/>
        <Keyboard/>
      </div>
    </>
  )
}

export default App


