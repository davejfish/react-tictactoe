import { useState } from 'react';
import { createContext } from 'react';
import newGame from '../state/default';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState(newGame);

  return (
    <GameContext.Provider value={{ gameBoard, setGameBoard }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };