
type HangmanWordProps = {
    word : string
    guessedLetters : string[]
    isLoser : boolean
}

const HangmanWord = ({word , guessedLetters , isLoser }:HangmanWordProps) => {
return (
    <div className="word">
        {word.split("").map((letter , index)=>(
            <span className="each-letter-container" key={index}>
                <span className={`${guessedLetters.includes(letter) || isLoser ? "":"each-letter hidden"} ${!guessedLetters.includes(letter) && isLoser ? "color-red":""}`}>{letter}</span>
            </span>
        ))}
    </div>
)
}

export default HangmanWord