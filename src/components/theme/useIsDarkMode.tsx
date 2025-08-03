import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.tsx';

export const useIsDarkMode = () => {
  return useContext(ThemeContext).isDarkMode;
};
