import './App.css';
import Header from './components/Header.tsx';
import WordHistory from './components/WorkHistory.tsx';
import EducationHistory from './components/EducationHistory.tsx';
import Skills from './components/Skills.tsx';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <WordHistory />
      <EducationHistory />
    </>
  );
}

export default App;
