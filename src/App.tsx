import { useState } from 'react';
import words from '../src/wordlist.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keybord from './Keybord';


const App = () => {
  const [word , setWord] = useState(words[Math.floor(Math.random()*words.length)])
  const [guessedLetters , setGuessedLetters] = useState<string[]>([])
  
  return (
    <section className='section-container'>
      <div className='section-header'>win lose</div>
      <div className='section-content'>
        <HangmanDrawing/>
        <HangmanWord word={word} guessedLetters={guessedLetters} />
        <Keybord/>
      </div>
    </section>
  )
}

export default App