import Timeline from '@mui/lab/Timeline';
import SectionAccordion from './common/SectionAccordion';
import MTG from './work/MTG.tsx';
import Plarium from './work/Plarium.tsx';
import Aristocrat from './work/Aristocrat.tsx';
import Other from './work/Other.tsx';
import { useIsPrintMode } from '../hooks/useIsPrintMode.tsx';
import { useIsMobile } from '../hooks/useIsMobile.tsx';

const WorkHistory = () => {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return (
    <SectionAccordion
      title="Опыт работы"
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
