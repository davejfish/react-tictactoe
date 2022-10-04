import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Message.css';

export default function Message() {
  const { winner, resetGame, turnsLeft } = useContext(GameContext);
  return (
    <div className='message'>
      <h2>Tic Tac Toe!</h2>
      {(winner === false) && (turnsLeft <= 0) ? 
        <div>
          <span>tie game...</span>
          <button onClick={() => resetGame()}>play again?</button>
        </div> : 
        <></>
      }
      {winner !== false && (turnsLeft >= 1) ? 
        <div>
          <span>{winner} is champion!</span>
          <button onClick={() => resetGame()}>play again?</button>
        </div> : 
        <></>
      }
    </div>
  );
}
