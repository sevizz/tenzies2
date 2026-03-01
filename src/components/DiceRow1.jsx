import Dice from "./Dice"

export default function DiceRow1( {diceArray,setDiceArray} )
{
    return(
        <>
            <div className="row1">
                <Dice diceObject={diceArray[0]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[1]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[2]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[3]} setDiceArray={setDiceArray}/>
            </div>
        </>
    )
}