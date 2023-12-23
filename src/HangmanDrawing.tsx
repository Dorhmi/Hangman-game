
type HangmanDrawingProps = {
    numberOfGuesses : number
}


const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {

    const head = (<div className="head"/>)
    const body = (<div  className="body"/>)
    const rightArm = (<div className="right-arm"/>)
    const leftArm = (<div className="left-arm"/>)
    const rightLeg = (<div className="right-leg"/>)
    const leftLeg = (<div className="left-leg"/>)

    const body_parts = [head , body , rightArm , leftArm , rightLeg , leftLeg]
return (
    <div className="drawing-container">
        <div className="stick4"></div>
        <div className="stick3"></div>
        <div className="stick2"></div>
        <div className="stick1"></div>
        {body_parts.slice(0 , numberOfGuesses)}
    </div>
)
}

export default HangmanDrawing