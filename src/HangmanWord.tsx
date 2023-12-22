
type HangmanWordProps = {
    word : string
    guessedLetters : string[]
}

const HangmanWord = ({word , guessedLetters}:HangmanWordProps) => {
return (
    <div className="word">
        {word.split("").map((letter , index)=>(
            <span className="each-letter-container" key={index}>
                <span className={`${guessedLetters.includes(letter) ? "each-letter":"each-letter hidden"}`}>{letter}</span>
            </span>
        ))}
    </div>
)
}

export default HangmanWord