import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import avatarImage from '@assets/avatar.jpg';
import QRSVG from '@assets/qr.svg';
import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';
import Tooltip from '@ui/Tooltip';

const HeaderGrid = styled(Grid)(() => ({
  '@media print': {
    paddingLeft: '16px',
    paddingTop: '16px',
  },
}));

function Header() {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  return (
    <>
      <Grid container sx={{ my: 2 }}>
        <HeaderGrid container sx={{ width: '100%' }} direction={'row'}>
          <Grid
            size={isPrintMode ? { xs: 3 } : { xs: 2, md: 2 }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Avatar
              src={avatarImage}
              sx={
                isMobile
                  ? { width: 96, height: 96 }
                  : { width: 136, height: 136 }
              }
            />
          </Grid>

          <Grid
            size={isPrintMode ? { xs: 6 } : { xs: 8, md: 6 }}
            container
            direction={'column'}
            justifyContent={'start'}
            sx={{ px: isPrintMode ? 0 : 2 }}
            spacing={isPrintMode ? 1 : 0}
          >
            <Typography variant={isMobile ? 'subtitle1' : 'h5'}>
              Lead Frontend Developer
            </Typography>
            <Typography variant={isMobile ? 'subtitle2' : 'h6'}>
              Максим Бугай
            </Typography>

            <Grid
              alignItems={'flex-start'}
              justifyContent={'flex-start'}
              container
              sx={{
                px: { xs: isPrintMode ? 0 : 1, md: 0 },
              }}
            >
              <Grid container direction={'row'} spacing={1} sx={{ pt: 1 }}>
                <Grid size={{ xs: 12, md: isPrintMode ? 6 : 12 }}>
                  <Link
                    href="https://t.me/Engineer586898"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    aria-label="Telegram"
                  >
                    <Tooltip title="Telegram">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <TelegramIcon sx={{ fontSize: '16px' }} />
                        <Typography variant={'caption'}>
                          @Engineer586898
                        </Typography>
                      </Stack>
                    </Tooltip>
                  </Link>
                </Grid>
                <Grid size={{ xs: 12, md: isPrintMode ? 6 : 12 }}>
                  <Link
                    href="mailto:marvelsrp@yandex.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    aria-label="WhatsApp"
                  >
                    <Tooltip title={'Email'}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon sx={{ fontSize: '16px' }} />
                        <Typography variant={'caption'}>
                          marvelsrp@yandex.ru
                        </Typography>
                      </Stack>
                    </Tooltip>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {isPrintMode && (
            <Grid
              container
              alignItems={'end'}
              size={{ xs: 3 }}
              justifyContent={'end'}
              // className={'print'}
            >
              <Grid>
                <QRSVG />
              </Grid>
            </Grid>
          )}
          {isPrintMode ? (
            <Grid
              size={{ xs: 12 }}
              container
              direction={'row'}
              justifyContent={'start'}
              alignItems={'center'}
              sx={{ px: 0, pt: 1 }}
              spacing={1}
            >
              <Typography variant={'caption'}>
                Удалённо / Гибрид (Москва) | 33 года | Желаемая вилка оклада: от
                350 000 ₽
              </Typography>
            </Grid>
          ) : (
            <Grid
              size={{ xs: 12, md: 4 }}
              container
              direction={'column'}
              justifyContent={'start'}
              alignItems={isMobile ? 'start' : 'end'}
              sx={{ px: 2 }}
            >
              <Typography variant={'caption'}>
                Удалённо / Гибрид (Москва) | 33 года
              </Typography>
              <Typography
                variant={'caption'}
                sx={{ fontWeight: 500, color: 'success.main', mt: 0.5 }}
              >
                Желаемая вилка оклада: от 350 000 ₽
              </Typography>
            </Grid>
          )}
        </HeaderGrid>
      </Grid>
    </>
  );
}

export default Header;
