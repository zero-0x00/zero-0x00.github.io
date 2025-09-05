import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, CircularProgress, Grid } from '@mui/material';

import { ThemeProvider } from '@ui/theme/ThemeProvider.tsx';

const App = lazy(() => import('./App.tsx'));

const Fallback = () => (
  <Grid
    container
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    sx={{
      width: '100vw',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Grid>
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Suspense fallback={<Fallback />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
