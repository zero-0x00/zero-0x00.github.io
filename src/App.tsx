import { useEffect } from 'react';

import PrintIcon from '@mui/icons-material/Print';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';

import resumePDFUrl from '@assets/resume.pdf';
import AboutMe from '@components/AboutMe.tsx';
import EducationHistory from '@components/EducationHistory.tsx';
import HardSkills from '@components/HardSkills.tsx';
import Header from '@components/Header.tsx';
import SoftSkills from '@components/SoftSkills.tsx';
import WordHistory from '@components/WorkHistory.tsx';
import BugBounty from '@components/bugBounty/BugBounty.tsx';
import { useIsMobile } from '@hooks/useIsMobile.tsx';
import { useIsPrintMode } from '@hooks/useIsPrintMode.tsx';

import './App.css';

console.log(
  '%cПривет, исследователь 👋\nПоймал тебя за инспектором кода 😏\nЭтот сайт — моё резюме. Если ты здесь, скорее всего, тебя заставил HR.😎\nЛюблю, когда люди копаются под капотом. Исходники можешь найти тут: https://github.com/zero-0x00/zero-0x00.github.io.',
  'color: #00bfff; font-size: 16px;'
);

console.log(
  '%cЕсли будут вопросы, пиши в Телеграм 👉 https://t.me/Engineer586898',
  'color: #00ffbf; font-weight: bold;'
);

function App() {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isPrintMode) {
      window.print();
    }
  }, [isPrintMode]);

  const handlePrint = () => {
    window.open(resumePDFUrl, '_blank');
  };
  const isStandardView = !isPrintMode;
  return (
    <div className={isMobile ? 'mobile' : ''}>
      <Container
        maxWidth="lg"
        className={isPrintMode ? 'print-container' : ''}
        sx={{ mt: 1, mb: 4 }}
      >
        {isStandardView && (
          <Fab
            size="small"
            color="primary"
            aria-label="print"
            onClick={handlePrint}
            sx={{
              position: 'fixed',
              bottom: '16px',
              right: 'calc(16px + 48px)',
            }}
          >
            <PrintIcon />
          </Fab>
        )}

        <Header />
        <AboutMe />
        <HardSkills />
        <SoftSkills />
        <WordHistory />
        <EducationHistory />
        <BugBounty />
      </Container>
    </div>
  );
}

export default App;
