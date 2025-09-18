'use client';

import { useState, ReactNode, useEffect } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { useIsPrintMode } from '@hooks/useIsPrintMode';

import { ThemeContext } from './ThemeContext';
import { lightPalette, darkPalette } from './theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isPrintMode = useIsPrintMode();

  useEffect(() => {
    // Проверяем наличие параметра print в URL
    const urlParams = new URLSearchParams(window.location.search);
    setIsDarkMode(!urlParams.has('print'));
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const isStandardView = !isPrintMode;

  // Предотвращаем гидратацию до монтирования компонента
  if (!mounted) {
    return null;
  }

  return (
    <MUIThemeProvider theme={isDarkMode ? darkPalette : lightPalette}>
      <CssBaseline />
      <ThemeContext.Provider value={{ isDarkMode }}>
        {isStandardView && (
          <Fab
            size={'small'}
            aria-label={'toggle theme'}
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
