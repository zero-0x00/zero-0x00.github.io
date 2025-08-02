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
    const [expandedEducation, setExpandedEducation] = React.useState(true);

    return (<>
            {/* Раздел с образованием */}
            <Typography variant={'h5'} sx={{mt: 4, mb: 3}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <SchoolIcon color="primary"/>
                    Образование
                </Box>
            </Typography>

            <Timeline position="alternate" sx={{maxWidth: '900px', margin: '0 auto'}}>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2015 - 2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <SchoolIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    Магистр
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Компьютерные науки, Управление проектами
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Харьковский национальный университет радиоэлектроники, Харьков
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2012 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <SchoolIcon/>
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    Бакалавр
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Прикладная математика и менеджмент, Системный анализ и управление
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Харьковский национальный университет радиоэлектроники, Харьков
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2008 - 2012
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="info">
                            <SchoolIcon/>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    Младший специалист
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Разработка программного обеспечения
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Криворожский колледж Национального авиационного университета, Кривой Рог
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>

    );
}

export default App;
