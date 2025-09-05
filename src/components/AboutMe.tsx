import Box from '@mui/material/Box';

import SectionAccordion from '@ui/SectionAccordion';

function AboutMe() {
  return (
    <SectionAccordion title="About Me" id="soft-skills" defaultExpanded={true}>
      <Box sx={{ mt: 1 }}>
        Senior Frontend-разработчик с 8.5+ лет опыта во Frontend.
        Специализируюсь на React/Typescript/NodeJS/SocketIO/Vite/Webpack. Имею
        опыт выступлений на IT-конференциях. Занимаюсь менторством, регулярно
        провожу Code Review и занимаюсь рефакторингом. Имею опыт внедрения
        CI/CD, Code Splitting и Lazy Loading. Применяю на практике лучшие
        методологии: DRY, YAGNI, KISS, SOLID, YAGNI и SMART. Эффективно нахожу
        баланс в архитектуре между Clean Architecture и Feature-Sliced Design.
      </Box>
    </SectionAccordion>
  );
}

export default AboutMe;
