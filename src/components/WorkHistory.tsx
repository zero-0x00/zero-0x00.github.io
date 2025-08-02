import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import MTG from './work/MTG.tsx';
import Plarium from './work/Plarium.tsx';
import Aristocrat from './work/Aristocrat.tsx';
import Other from './work/Other.tsx';

const WorkHistory = () => {
  // Состояния для контроля развернутости секций
  // const [expandedWork, setExpandedWork] = React.useState(true);

  return (
    <>
      <Typography variant={'h5'} sx={{ m: 2 }}>
        Опыт работы
      </Typography>

      <Timeline position={'alternate-reverse'}>
        <MTG />
        <Aristocrat />
        <Plarium />
        <Other />
      </Timeline>
    </>
  );
};

export default WorkHistory;
