import React, { createContext, useContext, useState } from 'react';

interface AudioContextType {
  isPlayerOpen: boolean;
  setIsPlayerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  togglePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const togglePlayer = () => setIsPlayerOpen((prev) => !prev);

  return (
    <AudioContext.Provider value={{ isPlayerOpen, setIsPlayerOpen, togglePlayer }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
