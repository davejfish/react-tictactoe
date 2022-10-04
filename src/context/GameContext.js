import { useState } from 'react';
import { createContext } from 'react';
import newGame from '../state/default';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(newGame);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(9);

  const setTurn = () => {
    player === 'X' ? setPlayer('O') : setPlayer('X');
  };

  const checkWinner = (gameBoard) => {
    if (turnsLeft <= 1)
      return false;

    const checkRows = (a, b, c) => {
      if (gameBoard[a].content === '' || gameBoard[b].content === '' || gameBoard[c].content === '')
        return false;
      return (
        gameBoard[a].content === gameBoard[b].content && 
        gameBoard[b].content === gameBoard[c].content);
    };

    return (
      checkRows(0, 1, 2) || 
      checkRows(3, 4, 5) || 
      checkRows(6, 7, 8) || 
      checkRows(0, 3, 6) || 
      checkRows(1, 4, 7) || 
      checkRows(2, 5, 8) || 
      checkRows(0, 4, 8) || 
      checkRows(2, 4, 6)
    );
  };

  const resetGame = () => {
    setGameBoard(newGame);
    setPlayer('X');
    setWinner(false);
    setTurnsLeft(9);
  };

  const handleClick = (box) => {
    if (box.content !== '') return;

    const newBoard = gameBoard.map((square) => {
      if (square.position === box.position) {
        return { 
          position: box.position, 
          content: (player === 'X' ? 'X' : 'O') };
      }
      return square;
    });

    setGameBoard(newBoard);
    setTurnsLeft(prev => prev - 1);

    if (checkWinner(newBoard)) {
      setWinner(player);
    }

    setTurn();
  };

  return (
    <GameContext.Provider value={{ gameBoard, handleClick, winner, resetGame, turnsLeft }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
