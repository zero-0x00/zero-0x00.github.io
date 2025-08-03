import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BugReportIcon from '@mui/icons-material/BugReport';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SectionAccordion from './common/SectionAccordion';

import { SkillCategory } from './skills/types';
import {
  categoryNames,
  categoryOrder,
  skillsByCategory,
} from './skills/skillsData';
import { useIsPrintMode } from '../hooks/useIsPrintMode.tsx';

function Skills() {
  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'language':
      case 'framework':
        return <CodeIcon fontSize="small" />;
      case 'tool':
        return <SettingsIcon fontSize="small" />;
      case 'devops':
        return <StorageIcon fontSize="small" />;
      case 'methodology':
        return <ArchitectureIcon fontSize="small" />;
      case 'testing':
        return <BugReportIcon fontSize="small" />;
      default:
        return <SpeedIcon fontSize="small" />;
    }
  };
  const isPrintMode = useIsPrintMode();

  return (
    <SectionAccordion title="Навыки" id="skills" defaultExpanded={true}>
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
                      arrow
                    >
                      <Chip
                        label={skill.name}
                        color={isPrintMode ? 'default' : skill.color}
                        variant="outlined"
                        avatar={
                          skill.showIcon && !isPrintMode ? (
                            <Avatar sx={{ bgcolor: 'transparent' }}>
                              {getCategoryIcon(skill.category)}
                            </Avatar>
                          ) : undefined
                        }
                        sx={{
                          m: 0.5,
                          cursor: 'pointer',
                          '&:hover': {
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transform: 'translateY(-2px)',
                            transition: 'all 0.2s ease-in-out',
                          },
                        }}
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

export default Skills;
