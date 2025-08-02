import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
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
