import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import './App.css';
import Header from './components/Header.tsx';
import WordHistory from './components/WorkHistory.tsx';
import EducationHistory from './components/EducationHistory.tsx';
import Skills from './components/Skills.tsx';

function App() {
  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Header />
      <Divider />
      <Skills />
      <Divider />
      <WordHistory />
      <Divider />
      <EducationHistory />
    </Paper>
  );
}

export default App;
