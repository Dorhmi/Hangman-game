
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


const Keybord = () => {
return (
    <div className="keybord-container">
        {KEYS.map((key , index) => (
            <button className="keybord-btn " key={index}>{key}</button>
        ))}
    </div>
)
}

export default Keybord