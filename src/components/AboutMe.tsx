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
        Senior Frontend-разработчик с 9 годами опыта в создании
        высоконагруженных SPA-приложений. Специализируюсь на React, TypeScript и
        Redux, имею опыт разработки серверных микросервисов на Node.js (включая
        WebSockets/Socket.io).
      </Box>
      <Box sx={{ my: 1 }}>
        Участвую в проектировании архитектуры, планировании спринтов и релизов,
        провожу регулярные Code review. Настраивал CI/CD pipelines, внедрял
        Agile/Scrum процессы в команде.
      </Box>
      <Box sx={{ mb: 1 }}>
        Разрабатывал PWA для iOS/Android, создавал дизайн-системы и интегрировал
        Storybook. Есть опыт оптимизации производительности и сокращения времени
        загрузки приложений.
      </Box>
    </SectionAccordion>
  );
}

export default AboutMe;
