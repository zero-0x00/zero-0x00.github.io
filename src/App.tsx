import { useEffect } from 'react';

import './App.css';
import Header from './components/Header.tsx';
import WordHistory from './components/WorkHistory.tsx';
import EducationHistory from './components/EducationHistory.tsx';
import Skills from './components/Skills.tsx';
import BugBounty from './components/bugBounty/BugBounty.tsx';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import PrintIcon from '@mui/icons-material/Print';
import { useIsPrintMode } from './hooks/useIsPrintMode.tsx';

console.log(
  '%cПривет, исследователь 👋\nПоймал тебя за инспектором кода 😏\nЭтот сайт — моё резюме. Если ты здесь, скорее всего, тебя заставил HR исследовать, как он устроен 😎\nЛюблю, когда люди копаются под капотом. Исходники можешь найти тут: https://github.com/zero-0x00/zero-0x00.github.io.',
  'color: #00bfff; font-size: 16px;'
);
console.log(
  '%cЕсли будут вопросы, пиши в Телеграм 👉 @LazyEngineer_0',
  'color: #00ffbf; font-weight: bold;'
);

function App() {
  const isPrintMode = useIsPrintMode();

  useEffect(() => {
    if (isPrintMode) {
      window.print();
    }
  }, [isPrintMode]);

  const handlePrint = () => {
    const currentUrl = window.location.href.split('?')[0];
    window.open(`${currentUrl}?print`, '_blank');
  };

  return (
    <Container
      maxWidth="md"
      className={isPrintMode ? 'print-container' : ''}
      sx={{ mt: 1, mb: 4 }}
    >
      {!isPrintMode && (
        <Fab
          size="small"
          color="primary"
          aria-label="print"
          onClick={handlePrint}
          sx={{
            position: 'fixed',
            right: '16px',
            top: '16px',
          }}
        >
          <PrintIcon />
        </Fab>
      )}

      <Header />
      <Skills />
      <WordHistory />
      <EducationHistory />
      <BugBounty />
    </Container>
  );
}

export default App;
