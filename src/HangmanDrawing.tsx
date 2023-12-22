
const HangmanDrawing = () => {

    const head = (<div className="head"/>)
    const body = (<div  className="body"/>)
    const rightArm = (<div className="right-arm"/>)
    const leftArm = (<div className="left-arm"/>)
    const rightLeg = (<div className="right-leg"/>)
    const leftLeg = (<div className="left-leg"/>)
return (
    <div className="drawing-container">
        <div className="stick4"></div>
        <div className="stick3"></div>
        <div className="stick2"></div>
        <div className="stick1"></div>
        {head}
        {body}
        {rightArm}
        {leftArm}
        {rightLeg}
        {leftLeg}
    </div>
)
}

export default HangmanDrawing