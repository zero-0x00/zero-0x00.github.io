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
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ '& .term': { borderBottom: '1px dotted' } }}
                    >
                      Выступил на конференции{' '}
                      <Tooltip
                        title="Крупнейшая JavaScript-конференция в Украине, объединяющая фронтенд-разработчиков"
                        arrow
                      >
                        <span className="term">KharkivJS</span>
                      </Tooltip>{' '}
                      с докладом про UX и UI в веб-приложениях
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
                      sx={{ '& .term': { borderBottom: '1px dotted' } }}
                    >
                      Обеспечил прозрачность трансформации данных в NodeJS API
                      Gateway, создав open-source библиотеку{' '}
                      <Tooltip
                        title="Библиотека для преобразования и фильтрации данных API на лету"
                        arrow
                      >
                        <span className="term">apop</span>
                      </Tooltip>
                      , которая позволяет легко и быстро преобразовывать данные
                      в нужный формат
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Провел аналитическое исследование конфликтов permissions пользователей в проекте." />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ '& .term': { borderBottom: '1px dotted' } }}
                    >
                      Участвовал в разработке проекта для аналитики
                      маркетинговых кампаний, используя{' '}
                      <Tooltip
                        title="Инструмент для быстрого создания React-приложений без необходимости настройки окружения"
                        arrow
                      >
                        <span className="term">Create React App</span>
                      </Tooltip>{' '}
                      и{' '}
                      <Tooltip
                        title="Сборщик модулей JavaScript, который создает бандлы для веб-приложений"
                        arrow
                      >
                        <span className="term">Webpack</span>
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
                      sx={{
                        '& .term': {
                          marginLeft: '4px',
                          marginRight: '4px',
                          borderBottom: '1px dotted',
                        },
                      }}
                    >
                      Внедрил в команду принципы
                      <Tooltip
                        title="You Aren't Gonna Need It - Не создавайте функциональность заранее, пока она не нужна"
                        arrow
                      >
                        <span className="term">YAGNI</span>
                      </Tooltip>
                      ,
                      <Tooltip
                        title="Don't Repeat Yourself - Избегайте дублирования кода, выделяйте повторяющиеся части в отдельные компоненты"
                        arrow
                      >
                        <span className="term">DRY</span>
                      </Tooltip>
                      и
                      <Tooltip
                        title="Keep It Simple, Stupid - Сохраняйте простоту и избегайте лишней сложности"
                        arrow
                      >
                        <span className="term">KISS</span>
                      </Tooltip>
                      . Очистил сложно-читаемый Legacy код из бизнес логики.
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
                      sx={{ '& .term': { borderBottom: '1px dotted' } }}
                    >
                      Разработал{' '}
                      <Tooltip
                        title="Progressive Web App - веб-приложение, которое работает как нативное мобильное приложение с возможностью офлайн-работы"
                        arrow
                      >
                        <span className="term">PWA</span>
                      </Tooltip>{' '}
                      приложение для управления финансовыми потоками на базе{' '}
                      <Tooltip
                        title="Фреймворк для создания гибридных мобильных приложений с использованием веб-технологий"
                        arrow
                      >
                        <span className="term">Ionic</span>
                      </Tooltip>{' '}
                      <Tooltip
                        title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода"
                        arrow
                      >
                        <span className="term">React</span>
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

export default Plarium;
