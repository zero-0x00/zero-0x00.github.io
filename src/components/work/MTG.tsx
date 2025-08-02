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
                      Участвую в разработке комплескного коммерческого сервиса
                      для маркетологов (GoGame) с использованием
                      <Tooltip
                        title="Строго типизированный надмножество JavaScript, добавляющий статическую типизацию"
                        arrow
                      >
                        <span className="term">TypeScript</span>
                      </Tooltip>
                      <Tooltip
                        title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода"
                        arrow
                      >
                        <span className="term">React</span>
                      </Tooltip>
                      и
                      <Tooltip
                        title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером"
                        arrow
                      >
                        <span className="term">Socket.IO</span>
                      </Tooltip>
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
                      Провожу Code Review, выполняю сборку и поддержку UI
                      релизов через
                      <Tooltip
                        title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания"
                        arrow
                      >
                        <span className="term">Jenkins</span>
                      </Tooltip>
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
                      Занимаюсь рефакторингом монорепозитория и переводом на
                      <Tooltip
                        title="Строго типизированный надмножество JavaScript с статической типизацией"
                        arrow
                      >
                        <span className="term">TypeScript</span>
                      </Tooltip>
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
                      Обеспечиваю решение конфликтов при обновлении зависимостей
                      в
                      <Tooltip
                        title="Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями"
                        arrow
                      >
                        <span className="term">Kubernetes</span>
                      </Tooltip>
                      и
                      <Tooltip
                        title="Брокер сообщений для асинхронной передачи данных между сервисами"
                        arrow
                      >
                        <span className="term">RabbitMQ</span>
                      </Tooltip>
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
                      Обеспечил общие
                      <Tooltip
                        title="Инструмент статического анализа кода для выявления проблемных паттернов в JavaScript/TypeScript"
                        arrow
                      >
                        <span className="term">ESlint</span>
                      </Tooltip>
                      /
                      <Tooltip
                        title="Инструмент для автоматического форматирования кода по заданным правилам стиля"
                        arrow
                      >
                        <span className="term">Prettier</span>
                      </Tooltip>
                      правила, общие инструменты Unit и компонентного
                      тестирования с
                      <Tooltip
                        title="Фреймворк для автоматизации end-to-end тестирования веб-приложений"
                        arrow
                      >
                        <span className="term">Playwright</span>
                      </Tooltip>
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
                      Улучшил производительность
                      <Tooltip
                        title="Компонент таблицы с расширенной функциональностью для Material UI, поддерживающий большие наборы данных, фильтрацию и сортировку"
                        arrow
                      >
                        <span className="term">MUI X-Data-Grid</span>
                      </Tooltip>
                      с помощью инструментов профилирования, сократив
                      <Tooltip
                        title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице"
                        arrow
                      >
                        <span className="term">LCP</span>
                      </Tooltip>
                      , что отслеживается в
                      <Tooltip
                        title="Инструмент мониторинга производительности и сбора метрик"
                        arrow
                      >
                        <span className="term">Prometheus</span>
                      </Tooltip>
                      и
                      <Tooltip
                        title="Платформа мониторинга ошибок и производительности приложений в реальном времени"
                        arrow
                      >
                        <span className="term">Sentry</span>
                      </Tooltip>
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
                      Настроил централизованное управление секретами с
                      <Tooltip
                        title="Инструмент для безопасного хранения и доступа к секретам, токенам и другим конфиденциальным данным"
                        arrow
                      >
                        <span className="term">Vault</span>
                      </Tooltip>
                      и регистрацию сервисов через
                      <Tooltip
                        title="Механизм для обнаружения и регистрации доступных сервисов в распределенной системе"
                        arrow
                      >
                        <span className="term">Service Discovery</span>
                      </Tooltip>
                      для улучшения мониторинга в
                      <Tooltip
                        title="Стек Elasticsearch, Logstash и Kibana для поиска, анализа и визуализации логов"
                        arrow
                      >
                        <span className="term">ELK</span>
                      </Tooltip>
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

export default MTG;
