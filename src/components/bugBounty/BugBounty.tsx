import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// Импортируем PDF как URL
import coderunPdfUrl from '@assets/coderun.pdf';
import { useIsPrintMode } from '@hooks/useIsPrintMode';
import SectionAccordion from '@ui/SectionAccordion';
import Tooltip from '@ui/Tooltip';

import { bugbountyPrograms } from './bugbountyData.ts';

function BugBounty() {
  const isPrintMode = useIsPrintMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={'section'}>
      <SectionAccordion
        title="Достижения и увлечения"
        id="bugbounty"
        defaultExpanded={true}
      >
        <Box sx={{ mt: 1 }}>
          Постоянно развиваюсь в области фронтенд-разработки и веб-безопасности,
          участвую в соревнованиях и bug bounty, вхожу в топ исследователей
          BI.ZONE.
        </Box>
        <Box sx={{ mt: 1 }}>
          <Tooltip title="Нажмите, чтобы посмотреть сертификат" arrow>
            <Link
              component="button"
              variant="body1"
              onClick={handleOpenDrawer}
              sx={{
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              В 2024 году занял 7 место в соревновании по фронтенду Yandex
              CodeRun
            </Link>
          </Tooltip>
        </Box>
        <Box sx={{ mt: 1 }}>
          В 2023 году в 1 квартале занял 2 место в рейтинге лучших
          исследователей на платформе Bug Bounty BI.ZONE
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {isPrintMode ? null : (
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
              )}
              Участвую в программах по поиску уязвимостей в системах
              безопасности компаний:
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {bugbountyPrograms.map((program, index) => (
              <Tooltip
                key={index}
                title={program.description || program.name}
                arrow
              >
                <Chip
                  label={program.name}
                  color={isPrintMode ? 'default' : program.color || 'secondary'}
                  variant="outlined"
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

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleCloseDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: { xs: '100%', sm: '80%', md: '60%' },
              padding: 2,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
              borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Typography variant="h6" component="div">
              Yandex CodeRun 2024 - Frontend
            </Typography>
            <IconButton onClick={handleCloseDrawer} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <iframe
              src={`${coderunPdfUrl}#view=FitH&toolbar=0&navpanes=0`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
              title="Yandex CodeRun Certificate"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </Box>
        </Drawer>
      </SectionAccordion>
    </div>
  );
}

export default BugBounty;
