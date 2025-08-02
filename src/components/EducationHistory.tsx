import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
import JuniorSpecialist from './education/juniorSpecialist.tsx';
import Bachelor from './education/bachelor.tsx';
import Master from './education/master.tsx';

const EducationHistory = () => {
  return (
    <>
      {/* Раздел с образованием */}
      <Typography variant={'h5'} sx={{ mt: 4, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SchoolIcon color="primary" />
          Образование
        </Box>
      </Typography>

      <Timeline
        position="alternate"
        sx={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <Master />
        <Bachelor />
        <JuniorSpecialist />
      </Timeline>
    </>
  );
};

export default EducationHistory;
