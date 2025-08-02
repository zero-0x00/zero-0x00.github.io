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
import ArtistocratLogo from '../../assets/aristocrat.svg';

const Aristocrat = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 1 }}>
        Октябрь 2017 — Февраль 2025
      </TimelineOppositeContent>
      <TimelineSeparator>
        <ArtistocratLogo />
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
                Aristocrat
              </Typography>
              <Chip
                label="Senior Frontend Developer"
                color="primary"
                variant="outlined"
              />
            </Box>

            <List dense>
              <ListItem>
                <ListItemText primary="Интегрировал Vault, Service Discovery и RabbitMQ в микросервисы UI команды" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Улучшил производительность микросервиса NodeJS API-Gateway  на Typescript и масштабировал в Kubernetes на N pod" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильные и десктопные игры" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Разработал микросервис сокетов на основе Socket.IO. Это обеспечило проекту асинхронность в UI." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Участвовал в настройке ELK стека и Jenkins Jobs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Провел исследование на предмет утечек памяти, и аномалий в работе API, настроив Prometheus для NodeJS ApiGateway. " />
              </ListItem>
              <ListItem>
                <ListItemText primary="Улучшил скорость исправления UI ошибок, выполнив интеграцию React и NodeJS ApiGateway с Sentry. " />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Внедрил новую единую платформу автоматизированного тестирования Playwright (TypeScript) в компанию. На основе чего были написаны:"
                  secondary={
                    <Typography component="span" variant="body2">
                      • API Health тесты
                      <br />
                      • Data Quality для контроля качества данных
                      <br />
                      • Функциональное API-тестирование
                      <br />
                      • Регрессионное тестирование, каждый релиз
                      <br />
                      • Компонентное тестирование для UI пакета
                      <br />
                      • Unit тестирование для бизнес логики
                      <br />
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Улучшил Largest Contentful Paint (LCP) метрику сайта путем дробления chunks во время сборки." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Aristocrat;
