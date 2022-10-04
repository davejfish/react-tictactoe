import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

export default function Board() {
  const { gameBoard, handleClick, winner } = useContext(GameContext);
    
  return (
    <div className='game-board'>
      {gameBoard.map(box => (
        <div className='box' 
          onClick={winner === false ? () => handleClick(box) : undefined}
          key={box.position}>
          {box.content}
        </div>
      ))}
    </div>
  );
}

  

