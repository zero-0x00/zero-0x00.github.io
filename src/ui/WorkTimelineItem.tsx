import { ReactNode } from 'react';

import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useIsMobile } from '@hooks/useIsMobile.tsx';
import { useIsPrintMode } from '@hooks/useIsPrintMode.tsx';
import Tooltip from '@ui/Tooltip';

interface WorkTimelineItemProps {
  period: string;
  company: string;
  companyTooltip?: string;
  position: string;
  logo: ReactNode;
  children: ReactNode;
  isLast?: boolean;
}

const WorkTimelineItem = ({
  period,
  company,
  companyTooltip,
  position,
  logo,
  children,
  isLast = false,
}: WorkTimelineItemProps) => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();

  const renderCompanyName = () => {
    if (companyTooltip) {
      return (
        <Tooltip title={companyTooltip}>
          <span>{company}</span>
        </Tooltip>
      );
    }
    return company;
  };

  return isMobile || isPrintMode ? (
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
                  {renderCompanyName()}
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
                {renderCompanyName()}
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
