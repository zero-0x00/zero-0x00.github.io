import Box from '@mui/material/Box';

import SectionAccordion from '@ui/SectionAccordion';

function AboutMe() {
  return (
    <SectionAccordion title="About Me" id="soft-skills" defaultExpanded={true}>
      <Box sx={{ mt: 1 }}>
        Senior Frontend-разработчик (React, TypeScript) с более чем 8 лет опыта,
        специализируюсь на создании масштабируемых, высокопроизводительных и
        оптимизированных SPA. Имею опыт внедрения CI/CD, code splitting и lazy
        loading. Занимался менторством 2х frontend-разработчиков, регулярно
        провожу Code Review, one-to-one и Performance Review. Эксперт в
        оптимизации производительности (Web Vitals, memoization), разработке
        PWA, доступности (a11y) и написании чистого кода. Ориентирован на
        результат, менторство и построение технически зрелых frontend-решений.
      </Box>
    </SectionAccordion>
  );
}

export default AboutMe;
