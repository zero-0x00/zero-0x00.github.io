import { useState, ReactNode } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Fab from '@mui/material/Fab';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { useIsPrintMode } from '@hooks/useIsPrintMode.tsx';

import { ThemeContext } from './ThemeContext.tsx';
import { lightPalette, darkPalette } from './theme.ts';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Проверяем наличие параметра print в URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return !urlParams.has('print');
    }
    return true;
  });
  const isPrintMode = useIsPrintMode();
  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const isStandardView = !isPrintMode;
  return (
    <MUIThemeProvider
      theme={isDarkMode ? darkPalette : lightPalette}
      defaultMode={'dark'}
    >
      <ThemeContext.Provider value={{ isDarkMode }}>
        {isStandardView && (
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
        )}

        {children}
      </ThemeContext.Provider>
    </MUIThemeProvider>
  );
};
