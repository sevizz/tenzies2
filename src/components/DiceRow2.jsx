import Dice from "./Dice"

export default function DiceRow2( {diceArray,setDiceArray} )
{
    return(
        <>
            <div className="row2">
                <Dice diceObject={diceArray[4]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[5]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[6]} setDiceArray={setDiceArray}/>
                <Dice diceObject={diceArray[7]} setDiceArray={setDiceArray}/>
            </div>
        </>
    )
}