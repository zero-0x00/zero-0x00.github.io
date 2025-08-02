import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';

const Bachelor = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        2012 - 2015
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
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
  );
};

export default Bachelor;
