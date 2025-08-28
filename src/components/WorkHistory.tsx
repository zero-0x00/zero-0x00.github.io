import Timeline from '@mui/lab/Timeline';

import MTG from '@components//work/MTG';
import Aristocrat from '@components/work/Aristocrat';
import Other from '@components/work/Other';
import Plarium from '@components/work/Plarium';
import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';
import SectionAccordion from '@ui/SectionAccordion';

const WorkHistory = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return (
    <SectionAccordion
      title="Work experience"
      id="work-history"
      defaultExpanded={true}
      className={'section'}
    >
      <Timeline
        position={isMobile || isPrintMode ? 'left' : 'alternate-reverse'}
      >
        <MTG />
        <Aristocrat />
        <Plarium />
        <Other />
      </Timeline>
    </SectionAccordion>
  );
};

export default WorkHistory;
