import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import SectionAccordion from '../common/SectionAccordion.tsx';

import { bugbountyPrograms } from './bugbountyData.ts';

function BugBounty() {
  return (
    <SectionAccordion title="Увлечения" id="bugbounty" defaultExpanded={true}>
      <Box sx={{ mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            <Link
              href="https://bugbounty.bi.zone/profile/zero-0x00/hackactivity"
              target={'_blank'}
            >
              Профиль на платформе Bug Bounty BI.ZONE
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            В свободное время участвую в программах по поиску уязвимостей в
            системах безопасности компаний:
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {bugbountyPrograms.map((program, index) => (
            <Tooltip
              key={index}
              title={program.description || program.name}
              arrow
            >
              <Chip
                label={program.name}
                color={program.color || 'secondary'}
                variant="outlined"
                // avatar={
                //   <Avatar sx={{ bgcolor: 'transparent' }}>
                //     <SecurityIcon fontSize="small" />
                //   </Avatar>
                // }
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
    </SectionAccordion>
  );
}

export default BugBounty;
