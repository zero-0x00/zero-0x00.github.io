'use client';

import ArchitectureIcon from '@mui/icons-material/Architecture';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useIsPrintMode } from '@hooks/useIsPrintMode';
import SectionAccordion from '@ui/SectionAccordion';
import SkillChip from '@ui/SkillChip';
import Tooltip from '@ui/Tooltip';

import {
  categoryNames,
  categoryOrder,
  skillsByCategory,
} from './skills/skillsData';
import { SkillCategory } from './skills/types';

function HardSkills() {
  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'framework':
        return <CodeIcon fontSize="small" />;
      case 'tool':
        return <SettingsIcon fontSize="small" />;
      case 'devops':
        return <StorageIcon fontSize="small" />;
      case 'codeOrganization':
        return <ArchitectureIcon fontSize="small" />;
      case 'testing':
        return <BugReportIcon fontSize="small" />;
      default:
        return <SpeedIcon fontSize="small" />;
    }
  };
  const isPrintMode = useIsPrintMode();

  return (
    <SectionAccordion title="Hard skills" id="skills" defaultExpanded={true}>
      <Grid sx={{ mt: 1 }}>
        {categoryOrder.map(
          (category) =>
            skillsByCategory[category] && (
              <Box key={category} sx={{ mb: 1 }} className={'section'}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', mr: 1 }}
                  >
                    {categoryNames[category]}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                  {skillsByCategory[category].map((skill, index) => (
                    <Tooltip
                      key={index}
                      title={skill.description || skill.name}
                    >
                      <SkillChip
                        label={skill.name}
                        color={skill.color}
                        showIcon={skill.showIcon}
                        isPrintMode={isPrintMode}
                        icon={getCategoryIcon(skill.category)}
                      />
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            )
        )}
      </Grid>
    </SectionAccordion>
  );
}

export default HardSkills;
