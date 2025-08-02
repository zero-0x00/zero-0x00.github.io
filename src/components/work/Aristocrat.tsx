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
import Tooltip from '@mui/material/Tooltip';
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

            <List
              dense
              sx={{
                '& .term': {
                  borderBottom: '1px dotted',
                  mx: 0.5,
                },
              }}
            >
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Интегрировал
                      <Tooltip
                        title="Инструмент для безопасного хранения и доступа к секретам, токенам и другим конфиденциальным данным"
                        arrow
                      >
                        <span className="term">Vault</span>
                      </Tooltip>
                      <Tooltip
                        title="Механизм для обнаружения и регистрации доступных сервисов в распределенной системе"
                        arrow
                      >
                        <span className="term">Service Discovery</span>
                      </Tooltip>
                      и
                      <Tooltip
                        title="Брокер сообщений для асинхронной передачи данных между сервисами"
                        arrow
                      >
                        <span className="term">RabbitMQ</span>
                      </Tooltip>
                      в микросервисы UI команды
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Улучшил производительность микросервиса NodeJS API-Gateway
                      на
                      <Tooltip
                        title="Строго типизированный надмножество JavaScript, добавляющий статическую типизацию"
                        arrow
                      >
                        <span className="term">TypeScript</span>
                      </Tooltip>
                      и масштабировал в
                      <Tooltip
                        title="Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями"
                        arrow
                      >
                        <span className="term">Kubernetes</span>
                      </Tooltip>
                      на N pod
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильные и десктопные игры" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Разработал микросервис сокетов на основе
                      <Tooltip
                        title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером"
                        arrow
                      >
                        <span className="term">Socket.IO</span>
                      </Tooltip>
                      . Это обеспечило проекту асинхронность в UI.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Участвовал в настройке
                      <Tooltip
                        title="Стек Elasticsearch, Logstash и Kibana для поиска, анализа и визуализации логов"
                        arrow
                      >
                        <span className="term">ELK</span>
                      </Tooltip>
                      стека и
                      <Tooltip
                        title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания"
                        arrow
                      >
                        <span className="term">Jenkins</span>
                      </Tooltip>
                      Jobs
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Провел исследование на предмет утечек памяти, и аномалий в
                      работе API, настроив
                      <Tooltip
                        title="Инструмент мониторинга производительности и сбора метрик"
                        arrow
                      >
                        <span className="term">Prometheus</span>
                      </Tooltip>
                      для NodeJS ApiGateway.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Улучшил скорость исправления UI ошибок, выполнив
                      интеграцию
                      <Tooltip
                        title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода"
                        arrow
                      >
                        <span className="term">React</span>
                      </Tooltip>
                      и NodeJS ApiGateway с
                      <Tooltip
                        title="Платформа мониторинга ошибок и производительности приложений в реальном времени"
                        arrow
                      >
                        <span className="term">Sentry</span>
                      </Tooltip>
                      .
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      className="techText"
                    >
                      Внедрил новую единую платформу автоматизированного
                      тестирования
                      <Tooltip
                        title="Фреймворк для автоматизации end-to-end тестирования веб-приложений"
                        arrow
                      >
                        <span className="term">Playwright</span>
                      </Tooltip>
                      (
                      <Tooltip
                        title="Строго типизированный язык программирования, расширяющий возможности JavaScript"
                        arrow
                      >
                        <span className="term">TypeScript</span>
                      </Tooltip>
                      ) в компанию.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Aristocrat;
