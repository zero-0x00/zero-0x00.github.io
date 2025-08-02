import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import JuniorSpecialist from './education/juniorSpecialist.tsx';
import Bachelor from './education/bachelor.tsx';
import Master from './education/master.tsx';

const EducationHistory = () => {
  return (
    <>
      <Typography variant={'h5'} sx={{ m: 2 }}>
        Образование
      </Typography>

      <Timeline
        position="alternate-reverse"
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
