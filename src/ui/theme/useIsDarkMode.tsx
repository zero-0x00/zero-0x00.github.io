import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

export const useIsDarkMode = () => {
  return useContext(ThemeContext).isDarkMode;
};
