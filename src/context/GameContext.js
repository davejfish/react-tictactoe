import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameBoard, setGameBoard] = useState([]);

  return (
    <GameContext.Provider value={{ gameBoard, setGameBoard }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };