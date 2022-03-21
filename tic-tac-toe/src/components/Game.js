import {whoIsWinner} from "../functions";
import React, {useState} from 'react';
import Board from './Board';

const Game= ()=> {
  const [allStep, setallStep]= useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber]= useState(0);
  const [xisNext, setXIsNext]= useState(true);
  const winner= whoIsWinner(allStep[stepNumber]);
  const player= xisNext ? "X" : "O";

  const handleClick =(i) =>{
    const historyPoint= allStep.slice(0, stepNumber +1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    
    //if have winner or can not have more step
    if( winner || squares[i]){
      return;
    }

    squares[i]= player;
    setallStep([
      ...historyPoint,
      squares
    ])
    setStepNumber(historyPoint.length);
    setXIsNext(!xisNext);
  }
  return (
    <div>
      <Board squares={allStep[stepNumber]} onClick={handleClick} />
      <div className="game-notification">
          <h3>{winner ? "🎉 Winner is " + winner : "Next player: " + player}</h3>
      </div>
    </div>
  )
}