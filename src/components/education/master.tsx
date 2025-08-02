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

const Master = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 1.5 }}>
        2015 - 2017
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="warning">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card variant="outlined">
          <CardContent color={'success'}>
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
  );
};

export default Master;
