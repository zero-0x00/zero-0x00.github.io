import Timeline from '@mui/lab/Timeline';

import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';
import SectionAccordion from '@ui/SectionAccordion';

import Bachelor from './education/bachelor';
import JuniorSpecialist from './education/juniorSpecialist';
import Master from './education/master';

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
