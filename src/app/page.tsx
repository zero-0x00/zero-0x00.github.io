import { Suspense } from 'react';

import Container from '@mui/material/Container';

import AboutMe from '../components/AboutMe';
import EducationHistory from '../components/EducationHistory';
import HardSkills from '../components/HardSkills';
import Header from '../components/Header';
import SoftSkills from '../components/SoftSkills';
import WorkHistory from '../components/WorkHistory';
import BugBounty from '../components/bugBounty/BugBounty';
import ClientInteractions from './ClientInteractions';

// Серверный компонент - рендерится на сервере для SEO
export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
      {/* Статический контент рендерится на сервере */}
      <Header />
      <AboutMe />
      <HardSkills />
      <SoftSkills />
      <WorkHistory />
      <EducationHistory />
      <BugBounty />

      {/* Интерактивные элементы загружаются на клиенте */}
      <Suspense fallback={null}>
        <ClientInteractions />
      </Suspense>
    </Container>
  );
}
