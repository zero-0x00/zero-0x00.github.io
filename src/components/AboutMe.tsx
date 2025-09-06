import Box from '@mui/material/Box';

import SectionAccordion from '@ui/SectionAccordion';

function AboutMe() {
  return (
    <SectionAccordion
      title="About Me"
      id="soft-skills"
      defaultExpanded={true}
      className={'text-wide'}
    >
      <Box sx={{ mt: 1 }}>
        Senior Frontend-разработчик с 16+ годами опыта, из них 8.5 года во
        Frontend. Специализируюсь на React, Typescript, NodeJS, SocketIO, Vite,
        Webpack. Выступаю на IT-конференциях, занимаюсь менторством, регулярно
        провожу Code Review и рефакторинг. Внедряю CI/CD, Code Splitting и Lazy
        Loading. Активно применяю лучшие практики: DRY, YAGNI, KISS, SOLID,
        SMART. Умею находить баланс между Clean Architecture и Feature-Sliced
        Design.
      </Box>
    </SectionAccordion>
  );
}

export default AboutMe;
