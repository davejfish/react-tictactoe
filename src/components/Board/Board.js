import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

export default function Board() {
  const { gameBoard, setGameBoard } = useContext(GameContext);

  const handleClick = (box) => {
    const newBoard = gameBoard.map((square) => {
      if (square.position === box.position) {
        return { position: box.position, content: 'ye' };
      }
      return square;
    });
    setGameBoard(newBoard);
  };
    
  return (
    <div className='game-board'>
      {gameBoard.map(box => (
        <div className='box' onClick={() => handleClick(box)} key={box.position}>{box.content}</div>
      ))}
    </div>
  );
}

  

