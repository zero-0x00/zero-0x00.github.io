import * as React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CodeIcon from '@mui/icons-material/Code';
import Avatar from '@mui/material/Avatar';

function App() {
  // const [expandedSkills, setExpandedSkills] = React.useState(true);

  // Массив навыков для отображения в виде чипов
  const skills = [
    'Typescript',
    'JavaScript',
    'Node.js',
    'Webpack',
    'Vite',
    'SWC',
    'Babel',
    'ReactJS',
    'Tanstack Query',
    'Recharts',
    'Formik',
    'Redux',
    'koa',
    'Material UI',
    'Jenkins',
    'Kibana',
    'Grafana',
    'Sentry',
    'GitHub Copilot',
    'OpenAI ChatGPT',
    'Prometheus',
    'axios',
    'Ionic',
    'git',
    'REST API',
    'Nginx',
    'Lerna + nx',
    'Kubernetes',
    'Styled Components',
    'TDD',
    'BDD',
    'Agile',
    'Scrum',
    'Waterfall',
    'Kanban',
    'DevOps',
  ];

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, index) => {
            // Определяем категорию навыка для цвета
            let color = 'default';
            if (
              skill.includes('Script') ||
              skill === 'TypeScript' ||
              skill === 'JavaScript' ||
              skill === 'Node.js' ||
              skill === 'ReactJS'
            ) {
              color = 'primary';
            } else if (
              skill === 'Kubernetes' ||
              skill === 'Jenkins' ||
              skill === 'Grafana' ||
              skill === 'Prometheus' ||
              skill === 'DevOps'
            ) {
              color = 'secondary';
            } else if (
              skill === 'Agile' ||
              skill === 'Scrum' ||
              skill === 'Kanban' ||
              skill === 'Waterfall'
            ) {
              color = 'success';
            } else if (
              skill === 'TDD' ||
              skill === 'BDD' ||
              skill.includes('Test')
            ) {
              color = 'info';
            }

            return (
              <Chip
                key={index}
                label={skill}
                color={
                  color as
                    | 'default'
                    | 'primary'
                    | 'secondary'
                    | 'success'
                    | 'info'
                    | 'warning'
                    | 'error'
                }
                variant="outlined"
                avatar={
                  skill.includes('Script') ||
                  skill === 'ReactJS' ||
                  skill === 'Node.js' ? (
                    <Avatar sx={{ bgcolor: 'transparent' }}>
                      <CodeIcon fontSize="small" />
                    </Avatar>
                  ) : undefined
                }
                sx={{ m: 0.5 }}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}

export default App;
