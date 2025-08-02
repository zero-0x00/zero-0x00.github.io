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

import { SkillCategory } from './skills/types';
import {
  categoryNames,
  categoryOrder,
  skillsByCategory,
} from './skills/skillsData';

function Skills() {
  // Функция для определения иконки на основе категории
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

  return (
    <>
      <Typography variant={'h5'} sx={{ m: 2 }}>
        Навыки
      </Typography>

      <Grid sx={{ mt: 3, pl: 2 }}>
        {categoryOrder.map(
          (category) =>
            skillsByCategory[category] && (
              <Box key={category} sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, fontWeight: 'bold' }}
                >
                  {categoryNames[category]}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skillsByCategory[category].map((skill, index) => (
                    <Tooltip
                      key={index}
                      title={skill.description || skill.name}
                      arrow
                    >
                      <Chip
                        label={skill.name}
                        color={skill.color || 'default'}
                        variant="outlined"
                        avatar={
                          skill.showIcon ? (
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
    </>
  );
}

export default Skills;
