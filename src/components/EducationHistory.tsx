import Timeline from '@mui/lab/Timeline';

import { useIsMobile } from '@hooks/useIsMobile.tsx';
import { useIsPrintMode } from '@hooks/useIsPrintMode.tsx';
import SectionAccordion from '@ui/SectionAccordion';

import Bachelor from './education/bachelor.tsx';
import JuniorSpecialist from './education/juniorSpecialist.tsx';
import Master from './education/master.tsx';

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
