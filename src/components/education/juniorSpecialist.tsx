import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import { useIsPrintMode } from '../../hooks/useIsPrintMode.tsx';
import { useIsMobile } from '../../hooks/useIsMobile.tsx';

const JuniorSpecialist = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return isMobile || isPrintMode ? (
    <TimelineItem className={'section'}>
      <TimelineContent sx={{ textAlign: 'start' }}>
        <Card variant="outlined">
          <CardContent>
            <Tooltip title="Диплом с отличием" arrow placement={'top'}>
              <Typography
                variant={'h5'}
                align={'left'}
                sx={{ fontWeight: 'bold' }}
              >
                Младший специалист
              </Typography>
            </Tooltip>
            <Typography variant={'subtitle2'} align={'left'}>
              2015 - 2017
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
  ) : (
    <TimelineItem className={'section'}>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 1.5 }}>
        2009 - 2012
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Tooltip title="Диплом с отличием" arrow placement={'top'}>
          <TimelineDot color="success">
            <SchoolIcon />
          </TimelineDot>
        </Tooltip>
      </TimelineSeparator>
      <TimelineContent>
        <Card variant="outlined">
          <CardContent>
            <Tooltip title="Диплом с отличием" arrow placement={'top'}>
              <Typography variant="h6" component="div" fontWeight="bold">
                Младший специалист
              </Typography>
            </Tooltip>
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
