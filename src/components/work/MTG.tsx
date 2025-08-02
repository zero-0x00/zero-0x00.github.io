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
import MTGLogo from '../../assets/mtg.svg';

const MTG = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 0.75 }}>
        Февраль 2025 — настоящее время
      </TimelineOppositeContent>
      <TimelineSeparator>
        <MTGLogo />
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
                ml: 2,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                Modern Times Group
              </Typography>
              <Chip
                label="Expert Frontend Developer"
                color="primary"
                variant="outlined"
              />
            </Box>

            <List dense>
              <ListItem>
                <ListItemText primary="Участвую в разработке комплескного коммерческого сервиса для маркетологов (GoGame)." />
              </ListItem>

              <ListItem>
                <ListItemText primary="Провожу Code Review, выполняю сборку и поддержку UI релизов" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Занимаюсь рефакторингом монорепозитория и переводом на TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Обеспечиваю решение конфликтов при обновлении зависимостей." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Обеспечил общие ESlint/Prettier правила, общие инструменты Unit и компонентного тестирования." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Улучшил производительность MUI X-Data-Grid с помощью инструментов профилирования" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default MTG;
