import './App.css';
import Header from './components/Header.tsx';
import WordHistory from './components/WorkHistory.tsx';
import EducationHistory from './components/EducationHistory.tsx';
import Skills from './components/Skills.tsx';
import BugBounty from './components/bugBounty/BugBounty.tsx';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
      <Header />
      <WordHistory />
      <EducationHistory />
      <Skills />
      <BugBounty />
    </Container>
  );
}

export default App;
