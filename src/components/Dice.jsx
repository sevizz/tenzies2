export default function Dice( {diceObject,setDiceArray} ) 

{

    const classname = diceObject.selected?"selected":"notselected"
    
    return (
        <>
        <button className={classname} onClick={() => setDiceArray(oldArray => oldArray.map(die => (die.id == diceObject.id)?
            {
                ...die,
                selected: !diceObject.selected
            }:
            die))}>
        <h3>{diceObject.value}</h3>
        </button>
        </>
    )
}