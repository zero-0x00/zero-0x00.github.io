import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Other = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        2009 — 2014
      </TimelineOppositeContent>
      <TimelineSeparator>
        <WorkHistoryIcon fontSize={'large'} />
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
                Freelance
              </Typography>
              <Chip
                label="FullStack Web-разработчик"
                color="info"
                variant="outlined"
              />
            </Box>

            <List dense>
              <ListItem>
                <ListItemText primary="Полный цикл разработки веб-приложений: от клиентской логики до серверной части и баз данных" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Разработка пользовательских интерфейсов и REST API" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Настройка серверов и деплой приложений" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Обеспечение стабильности, безопасности и масштабируемости решений" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Other;
