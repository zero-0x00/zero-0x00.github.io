import { createTheme } from '@mui/material/styles';

// Create a temporary theme to access the palette.augmentColor function
const theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

export const lightPalette = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    primary: theme.palette.augmentColor({
      color: {
        main: '#4f78a0',
      },
      name: 'primary',
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: '#3875d6',
      },
      name: 'secondary',
    }),
    info: theme.palette.augmentColor({
      color: {
        main: '#3495b6', //'#0288D1',//
      },
      name: 'info',
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: '#ED6C02',
      },
      name: 'warning',
    }),
    success: theme.palette.augmentColor({
      color: {
        main: '#288500',
      },
      name: 'success',
    }),
    pending: theme.palette.augmentColor({
      color: {
        main: '#c19203',
      },
      name: 'pending',
    }),
    payment: theme.palette.augmentColor({
      color: {
        main: '#B85CB6',
      },
      name: 'payment',
    }),
    inactive: theme.palette.augmentColor({
      color: {
        main: '#8F8F8F',
      },
      name: 'inactive',
    }),
    draft: theme.palette.augmentColor({
      color: {
        main: '#666666',
      },
      name: 'inactive',
    }),
    error: theme.palette.augmentColor({
      color: {
        main: 'rgb(211, 47, 47)',
      },
      name: 'error',
    }),
  },
});

// A custom theme for this app
export const darkPalette = createTheme({
  cssVariables: true,

  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#2A2A2A',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    primary: theme.palette.augmentColor({
      color: {
        main: '#90caf9',
      },
      name: 'primary',
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: '#44a5f5',
      },
      name: 'secondary',
    }),
    info: theme.palette.augmentColor({
      color: {
        main: '#44C8F5',
      },
      name: 'info',
    }),
    warning: theme.palette.augmentColor({
      color: {
        main: '#ED6C02',
      },
      name: 'warning',
    }),
    success: theme.palette.augmentColor({
      color: {
        main: '#38A800',
      },
      name: 'success',
    }),
    pending: theme.palette.augmentColor({
      color: {
        main: '#F1B601',
      },
      name: 'pending',
    }),
    payment: theme.palette.augmentColor({
      color: {
        main: '#B85CB6',
      },
      name: 'payment',
    }),
    inactive: theme.palette.augmentColor({
      color: {
        main: '#666666',
      },
      name: 'inactive',
    }),
    draft: theme.palette.augmentColor({
      color: {
        main: '#8F8F8F',
      },
      name: 'draft',
    }),
    error: theme.palette.augmentColor({
      color: {
        main: '#FF6666', //
      },
      name: 'error',
    }),
  },
});
