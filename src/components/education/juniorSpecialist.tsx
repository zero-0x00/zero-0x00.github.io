import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';

const JuniorSpecialist = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        2009 - 2012
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="success">
          <SchoolIcon />
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
              Криворожский колледж Национального авиационного университета,
              Кривой Рог
            </Typography>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default JuniorSpecialist;
