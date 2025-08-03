import { useState, ReactNode } from 'react';
import { lightPalette, darkPalette } from './theme.ts';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Fab from '@mui/material/Fab';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Проверяем наличие параметра print в URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return !urlParams.has('print');
    }
    return true;
  });

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <MUIThemeProvider
      theme={isDarkMode ? darkPalette : lightPalette}
      defaultMode={'dark'}
    >
      <ThemeContext.Provider value={{ isDarkMode }}>
        <Fab
          size={'small'}
          aria-label={'print'}
          onClick={handleToggleTheme}
          color={'primary'}
          sx={{
            position: 'fixed',
            right: '16px',
            bottom: '16px',
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
        {children}
      </ThemeContext.Provider>
    </MUIThemeProvider>
  );
};
