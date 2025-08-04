import Timeline from '@mui/lab/Timeline';
import SectionAccordion from './common/SectionAccordion';
import JuniorSpecialist from './education/juniorSpecialist.tsx';
import Bachelor from './education/bachelor.tsx';
import Master from './education/master.tsx';
import { useIsPrintMode } from '../hooks/useIsPrintMode.tsx';
import { useIsMobile } from '../hooks/useIsMobile.tsx';

const EducationHistory = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();

  return (
    <SectionAccordion
      title="Образование"
      id="education"
      defaultExpanded={true}
      className={'section'}
    >
      <Timeline
        position={isMobile || isPrintMode ? 'left' : 'alternate-reverse'}
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
