import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SectionAccordion from '@ui/SectionAccordion';

import { softSkills } from './skills/skillsData';

function SoftSkills() {
  return (
    <SectionAccordion
      title="Soft Skills"
      id="soft-skills"
      defaultExpanded={true}
      className={'section'}
    >
      <Box sx={{ mt: 1 }}>
        <List dense>
          {softSkills.map((skill, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon color="success" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={skill.description || skill.name}
                primaryTypographyProps={{ fontSize: 15 }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </SectionAccordion>
  );
}

export default SoftSkills;
