import { useState } from 'react';
import words from '../src/wordlist.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keybord from './Keybord';


const App = () => {
  const [word , setWord] = useState(words[Math.floor(Math.random()*words.length)])
  const [guessedLetters , setGuessedLetters] = useState<string[]>([])

  const correctLetters = guessedLetters.filter((letter)=> word.includes(letter))
  const incorrectLetters = guessedLetters.filter((letter)=> !word.includes(letter))

  const isLoser = incorrectLetters.length === 6
  const isWinner = word.split("").every((letter) => guessedLetters.includes(letter))

  const getKey = (key:string) => {
    if(guessedLetters.includes(key)) {
      return
    }

      setGuessedLetters(currentKey => [...currentKey, key])
  }
  console.log(guessedLetters);
  
  
  return (
    <section className='section-container'>
      <div className='section-header'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
        </div>
      <div className='section-content'>
        <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
        <HangmanWord isLoser = {isLoser} word={word} guessedLetters={guessedLetters} />
        <Keybord disabled={isLoser || isWinner} incorrectLetters={incorrectLetters} correctLetters={correctLetters} getKey={getKey}/>
      </div>
    </section>
  )
}

export default App