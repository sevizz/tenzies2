import { useState,useEffect } from 'react'

import DiceRow1 from './components/DiceRow1'
import DiceRow2 from './components/DiceRow2'
import { nanoid } from 'nanoid'


function App() {

  function generateNewDie()
  {
    return {
      value: Math.ceil(Math.random()*6),
      selected:false,
      id: nanoid()
    }
  }

  function generateAllDie()
  {
    return Array.from({length:8}, () => generateNewDie())
  }

  

  function rollDice()
  {
    setDiceArray(oldDice => oldDice.map(die => die.selected?die:{
      ...die,
      value:Math.ceil(Math.random()*6)
    }))
  }

  const [diceArray, setDiceArray] = useState(generateAllDie)
  const [gameWin, setGameWin] = useState(false)

  
  
  useEffect(() => {
    const allSelected = diceArray.every(die => die.selected)
    const chk = diceArray[0].value 
    const allSameValue = diceArray.every(die => (die.value === chk))
    if (allSelected && allSameValue)
    {
      setGameWin(true)
    }
  })


  return (
    <>
    <h1>TENZIES</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
    <DiceRow1   diceArray={diceArray} setDiceArray={setDiceArray}/>
    <DiceRow2   diceArray={diceArray} setDiceArray={setDiceArray}/>
    <button onClick={rollDice} className='roll'>Roll the dice</button>
    {gameWin && (
      <h1>YOU WIN!!!!!!!</h1>
    )}
    </>
  )
}

export default App
