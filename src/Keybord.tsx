
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type keyboardprops = {
    getKey : ((key:string) => void)
    incorrectLetters : string[]
    correctLetters : string[]
    disabled : boolean
}

const Keybord = ({getKey , incorrectLetters , correctLetters , disabled}:keyboardprops) => {
return (
    <div className="keybord-container">
        {KEYS.map((key , index) => {
            const isActive = correctLetters.includes(key)
            const isInactive = incorrectLetters.includes(key)
            return (
                <button onClick={()=>getKey(key)} 
                className={`${"keybord-btn"} ${isActive && "active"} ${isInactive && "inactive"}`} 
                key={index}
                disabled = {isActive || isInactive || disabled }
                >
                {key}
                </button>
            )
        })}
    </div>
)

}

export default Keybord