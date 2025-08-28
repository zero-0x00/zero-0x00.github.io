import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import avatarImage from '@assets/avatar.jpg';
import QRSVG from '@assets/qr.svg';
import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';
import SkillChip from '@ui/SkillChip';
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
      <Grid className={'print'}>
        <Typography variant="body2" align={'center'}>
          Интерактивная версия резюме:&nbsp;
          <Link href={'https://zero-0x00.github.io/'} variant="body2">
            https://zero-0x00.github.io/
          </Link>
        </Typography>
      </Grid>
      <Grid container spacing={isPrintMode ? 0 : 2} sx={{ my: 2 }}>
        <HeaderGrid
          container
          sx={{ width: '100%' }}
          direction={isMobile ? 'row-reverse' : 'row'}
        >
          <Grid
            size={{ xs: 2, md: 2 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={avatarImage}
              sx={
                isMobile
                  ? { width: 96, height: 96 }
                  : { width: 128, height: 128 }
              }
            />
          </Grid>
          <Grid
            size={{ xs: 10, md: 10 }}
            container
            direction={'column'}
            justifyContent={'center'}
            sx={{ px: 2 }}
            spacing={isPrintMode ? 1 : 0}
          >
            <Typography variant={'h4'}>
              Senior/Lead Frontend Developer
            </Typography>
            <Typography variant={'h5'}>Максим Бугай</Typography>
            <Typography variant={'caption'}>
              Офис/Гибрид/Удалённо (Москва СЗАО/ЗАО) | Гражданство РФ | 33 года
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0, ml: -1 }}>
              <SkillChip
                label={'JavaScript (ES6+)'}
                variant={'filled'}
                showIcon={true}
                isPrintMode={isPrintMode}
                icon={<DataObjectIcon fontSize="small" />}
              />
              <SkillChip
                label={'TypeScript (5.9+)'}
                variant={'filled'}
                showIcon={true}
                isPrintMode={isPrintMode}
                icon={<DataArrayIcon fontSize="small" />}
              />
              <SkillChip
                label={'React (18+)'}
                variant={'filled'}
                showIcon={true}
                isPrintMode={isPrintMode}
                icon={<CodeIcon fontSize="small" />}
              />
            </Box>
            {isPrintMode && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 50,
                  right: 14,
                  zIndex: 1000,
                }}
              >
                <QRSVG />
              </Box>
            )}
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            alignItems={'flex-start'}
            justifyContent={isMobile ? 'flex-start' : 'flex-end'}
            container
            sx={{ px: isPrintMode ? 2 : isMobile ? 2 : 1 }}
          >
            <Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  gap: isMobile ? 3 : 2,
                }}
              >
                <Link
                  href="https://t.me/Engineer586898"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label="Telegram"
                >
                  <Tooltip title="Telegram">
                    <TelegramIcon fontSize={isMobile ? 'large' : 'small'} />
                  </Tooltip>
                </Link>
                <Link
                  href="https://wa.me/79180584679"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label="WhatsApp"
                >
                  <Tooltip title="WhatsApp">
                    <WhatsAppIcon fontSize={isMobile ? 'large' : 'small'} />
                  </Tooltip>
                </Link>
                <Link
                  href="mailto:marvelsrp@yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  aria-label="WhatsApp"
                >
                  <Tooltip title={'Email'}>
                    <EmailIcon fontSize={isMobile ? 'large' : 'small'} />
                  </Tooltip>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </HeaderGrid>
      </Grid>
    </>
  );
}

export default Header;
