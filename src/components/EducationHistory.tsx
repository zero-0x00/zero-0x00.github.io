import Timeline from '@mui/lab/Timeline';
import SectionAccordion from './common/SectionAccordion';
import JuniorSpecialist from './education/juniorSpecialist.tsx';
import Bachelor from './education/bachelor.tsx';
import Master from './education/master.tsx';

const EducationHistory = () => {
  return (
    <SectionAccordion title="Образование" id="education" defaultExpanded={true}>
      <Timeline
        position="alternate-reverse"
        sx={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <Master />
        <Bachelor />
        <JuniorSpecialist />
      </Timeline>
    </SectionAccordion>
  );
};

export default EducationHistory;
