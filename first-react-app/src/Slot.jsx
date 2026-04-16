export default function Slot({val1,val2,val3}){
    const isWinner = val1===val2 && val1===val3
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h1 style={{color:isWinner ? "green" : "red"}}>{isWinner ? "You win" : "You loose"}</h1>
        </div>
    )
}