import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';

function App() {
    // Состояния для контроля развернутости секций
    const [expandedWork, setExpandedWork] = React.useState(true);

    return (
        <>
            <Typography variant={'h5'} sx={{mb: 3}}>Опыт работы</Typography>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        Февраль 2025 — настоящее время
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <WorkHistoryIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined" sx={{mb: 3}}>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                                        MTG
                                    </Typography>
                                    <Chip
                                        label="Expert Frontend Developer"
                                        color="primary"
                                        variant="outlined"
                                    />
                                </Box>

                                <List dense>
                                    <ListItem>
                                        <ListItemText
                                            primary="Участвовую в разработке комплескного коммерческого сервиса для маркетологов (GoGame)."
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary="Провожу Code Review для Pull Requests, выполняю сборку и поддержку UI релизов"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Занимаюсь рефакторингом монорепозитория и переводом на TypeScript"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Обеспечиваю решение конфликтов при обновлении зависимостей."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Обеспечил общие ESlint/Prettier правила, общие инструменты Unit и компонентного тестирования."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Улучшил производительность MUI X-Data-Grid с помощью инструментов профилирования"
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        Октябрь 2017 — Февраль 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <WorkHistoryIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined" sx={{mb: 3}}>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
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
                                        <ListItemText
                                            primary="Интегрировал Vault, Service Discovery и RabbitMQ в микросервисы UI команды"
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary="Улучшил производительность микросервиса NodeJS API-Gateway  на Typescript и масштабировал в Kubernetes на N pod"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильные и десктопные игры"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Разработал микросервис сокетов на основе Socket.IO. Это обеспечило проекту асинхронность в UI."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Участвовал в настройке ELK стека и Jenkins Jobs"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Провел исследование на предмет утечек памяти, и аномалий в работе API, настроив Prometheus для NodeJS ApiGateway. "
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Улучшил скорость исправления UI ошибок, выполнив интеграцию React и NodeJS ApiGateway с Sentry. "
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Внедрил новую единую платформу автоматизированного тестирования Playwright (TypeScript) в компанию. На основе чего были написаны:"
                                            secondary={
                                                <Typography component="span" variant="body2">
                                                    • API Health тесты<br/>
                                                    • Data Quality для контроля качества данных<br/>
                                                    • Функциональное API-тестирование<br/>
                                                    • Регрессионное тестирование, каждый релиз<br/>
                                                    • Компонентное тестирование для UI пакета<br/>
                                                    • Unit тестирование для бизнес логики<br/>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Улучшил Largest Contentful Paint (LCP) метрику сайта путем дробления chunks во время сборки."
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        Февраль 2016 — Октябрь 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <WorkHistoryIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined" sx={{mb: 3}}>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
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
                                            primary="Выступил на конференции KharkivJS с докладом про UX и UI в веб-приложениях"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Обеспечил прозрачность трансформации данных в ApiGateway, основав open-source библиотеку apop, которая позволяет легко и быстро преобразовывать данные в нужный формат"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Провел аналитическое исследование конфликтов permissions пользователей в проекте."
                                        />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText
                                            primary="Участвовал в разработке проекта для аналитики маркетинговых кампаний, используя Create React App и Webpack"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Внедрил в команду принципы YAGNI, DRY и KISS. Очистил сложно-читаемый Legacy код из бизнес логики."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Разработал PWA приложение для управления финансовыми потоками на базе Ionic React"
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        Март 2015 — Январь 2016
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" variant="outlined">
                            <WorkHistoryIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined" sx={{mb: 3}}>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                                        JustCoded
                                    </Typography>
                                    <Chip
                                        label="Junior JS Developer"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Box>

                                <List dense>
                                    <ListItem>
                                        <ListItemText
                                            primary="Разрабатывал мобильные и веб-приложений с использованием React и Ionic"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Разработал плагин-конструктор для CMS который позволяет создать заказ кастомного велосипеда."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Поддержка FullStack проектов в outsource"
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2009 — 2014
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="info" variant="outlined">
                            <WorkHistoryIcon/>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined" sx={{mb: 3}}>
                            <CardContent>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 2
                                }}>
                                    <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
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
                                        <ListItemText
                                            primary="Полный цикл разработки веб-приложений: от клиентской логики до серверной части и баз данных"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Разработка пользовательских интерфейсов и REST API"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Настройка серверов и деплой приложений"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Обеспечение стабильности, безопасности и масштабируемости решений"
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}

export default App;
