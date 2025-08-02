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
    const [expandedSkills, setExpandedSkills] = React.useState(true);

    // Массив навыков для отображения в виде чипов
    const skills = [
        "Typescript", "JavaScript", "Node.js", "Webpack", "Vite", "SWC", "Babel",
        "ReactJS", "Tanstack Query", "Recharts", "Formik", "Redux", "koa", "Material UI",
        "Jenkins", "Kibana", "Grafana", "Sentry", "GitHub Copilot", "OpenAI ChatGPT",
        "Prometheus", "axios", "Ionic", "git", "REST API", "Nginx", "Lerna + nx",
        "Kubernetes", "Styled Components", "TDD", "BDD", "Agile", "Scrum", "Waterfall",
        "Kanban", "DevOps"
    ];

    return (
        <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill, index) => {
                        // Определяем категорию навыка для цвета
                        let color = "default";
                        if (skill.includes("Script") || skill === "TypeScript" || skill === "JavaScript" || skill === "Node.js" || skill === "ReactJS") {
                            color = "primary";
                        } else if (skill === "Kubernetes" || skill === "Jenkins" || skill === "Grafana" || skill === "Prometheus" || skill === "DevOps") {
                            color = "secondary";
                        } else if (skill === "Agile" || skill === "Scrum" || skill === "Kanban" || skill === "Waterfall") {
                            color = "success";
                        } else if (skill === "TDD" || skill === "BDD" || skill.includes("Test")) {
                            color = "info";
                        }

                        return (
                            <Chip
                                key={index}
                                label={skill}
                                color={color as "default" | "primary" | "secondary" | "success" | "info" | "warning" | "error"}
                                variant="outlined"
                                avatar={skill.includes("Script") || skill === "ReactJS" || skill === "Node.js" ?
                                    <Avatar sx={{ bgcolor: 'transparent' }}>
                                        <CodeIcon fontSize="small" />
                                    </Avatar> : undefined
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
