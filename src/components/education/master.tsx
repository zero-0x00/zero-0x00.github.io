'use client';

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

const Master = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return isMobile || isPrintMode ? (
    <TimelineItem className={'section'}>
      <TimelineContent>
        <Card variant="outlined">
          <CardContent color={'success'} sx={{ textAlign: 'start' }}>
            <Typography
              variant={'h5'}
              align={'left'}
              sx={{ fontWeight: 'bold' }}
            >
              Магистр
            </Typography>
            <Typography variant={'subtitle2'} align={'left'}>
              2015 - 2017
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
  ) : (
    <TimelineItem className={'section'}>
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
