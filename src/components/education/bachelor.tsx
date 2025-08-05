import SchoolIcon from '@mui/icons-material/School';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';

const Bachelor = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return isMobile || isPrintMode ? (
    <TimelineItem className={'section'}>
      <TimelineContent sx={{ textAlign: 'start' }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant={'h5'}
              align={'left'}
              sx={{ fontWeight: 'bold' }}
            >
              Бакалавр
            </Typography>
            <Typography variant={'subtitle2'} align={'left'}>
              2012 - 2015
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
  ) : (
    <TimelineItem className={'section'}>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 1.5 }}>
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
