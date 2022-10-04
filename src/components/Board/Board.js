import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

export default function Board() {
  const { gameBoard, handleClick } = useContext(GameContext);
    
  return (
    <div className='game-board'>
      {gameBoard.map(box => (
        <div className='box' 
          onClick={() => handleClick(box)} 
          key={box.position}>
          {box.content}
        </div>
      ))}
    </div>
  );
}

  

