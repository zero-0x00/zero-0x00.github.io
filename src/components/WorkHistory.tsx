import Timeline from '@mui/lab/Timeline';
import SectionAccordion from './common/SectionAccordion';
import MTG from './work/MTG.tsx';
import Plarium from './work/Plarium.tsx';
import Aristocrat from './work/Aristocrat.tsx';
import Other from './work/Other.tsx';

const WorkHistory = () => {
  return (
    <SectionAccordion
      title="Опыт работы"
      id="work-history"
      defaultExpanded={true}
    >
      <Timeline position={'alternate-reverse'}>
        <MTG />
        <Aristocrat />
        <Plarium />
        <Other />
      </Timeline>
    </SectionAccordion>
  );
};

export default WorkHistory;
