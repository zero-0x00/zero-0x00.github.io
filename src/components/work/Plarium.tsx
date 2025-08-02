import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PlariumLogo from '../../assets/plarium.svg';

const Plarium = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 0.75 }}>
        Февраль 2016 — Октябрь 2017
      </TimelineOppositeContent>
      <TimelineSeparator>
        <PlariumLogo />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Plarium
              </Typography>
              <Chip
                label="Middle Frontend Developer"
                color="primary"
                variant="outlined"
              />
            </Box>

            <List dense>
              <ListItem>
                <ListItemText primary="Выступил на конференции KharkivJS с докладом про UX и UI в веб-приложениях" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Обеспечил прозрачность трансформации данных в NodeJS API Gateway, создав open-source библиотеку apop, которая позволяет легко и быстро преобразовывать данные в нужный формат" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Провел аналитическое исследование конфликтов permissions пользователей в проекте." />
              </ListItem>

              <ListItem>
                <ListItemText primary="Участвовал в разработке проекта для аналитики маркетинговых кампаний, используя Create React App и Webpack" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Внедрил в команду принципы YAGNI, DRY и KISS. Очистил сложно-читаемый Legacy код из бизнес логики." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Разработал PWA приложение для управления финансовыми потоками на базе Ionic React" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Plarium;
