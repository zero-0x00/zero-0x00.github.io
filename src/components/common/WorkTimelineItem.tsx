import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useIsPrintMode } from '../../hooks/useIsPrintMode.tsx';

interface WorkTimelineItemProps {
  period: string;
  company: string;
  position: string;
  logo: ReactNode;
  children: ReactNode;
  isLast?: boolean;
}

const WorkTimelineItem = ({
  period,
  company,
  position,
  logo,
  children,
  isLast = false,
}: WorkTimelineItemProps) => {
  const isPrintMode = useIsPrintMode();
  return isPrintMode ? (
    <TimelineItem className={'section'}>
      <TimelineContent>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Grid
              sx={{
                justifyContent: 'space-between',
                display: 'flex',
              }}
            >
              <Grid
                size={10}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant={'h5'}
                  align={'left'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {company}
                </Typography>
                <Typography variant={'subtitle2'} align={'left'}>
                  {period}
                </Typography>
                <Typography
                  variant={'subtitle2'}
                  align={'left'}
                  sx={{ fontStyle: 'italic' }}
                >
                  {position}
                </Typography>
              </Grid>
              <Grid size={2}>{logo}</Grid>
            </Grid>
            {children}
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  ) : (
    <TimelineItem className={'section'}>
      <TimelineOppositeContent color="text.secondary" sx={{ mt: 0.75 }}>
        {period}
      </TimelineOppositeContent>
      <TimelineSeparator>
        {logo}
        {!isLast && <TimelineConnector />}
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
                ml: 2,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {company}
              </Typography>
              <Chip label={position} color="primary" variant="outlined" />
            </Box>
            {children}
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkTimelineItem;
