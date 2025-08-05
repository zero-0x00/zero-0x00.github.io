import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import avatarImage from '@assets/avatar.jpg';
import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';

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
        <HeaderGrid size={{ xs: 12, md: 5 }} container>
          <Grid
            size={{ xs: 4, md: 5 }}
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
            size={{ xs: 8, md: 7 }}
            container
            direction={'column'}
            justifyContent={'center'}
            sx={{ px: 2 }}
            spacing={isPrintMode ? 1 : 2}
          >
            <Typography variant={'h6'}>Резюме</Typography>
            <Typography variant={'h4'}>Максим Бугай</Typography>
            <Typography variant={'h5'}>Senior Frontend Developer</Typography>
          </Grid>
        </HeaderGrid>
        <Grid container size={{ xs: 12, md: 7 }} spacing={isPrintMode ? 1 : 2}>
          <Grid container size={12}>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="Телефон"
                  disableTypography={true}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Link href="tel:+79180584679" color="inherit">
                        <Typography
                          variant={'body2'}
                          color={'text.secondary'}
                          sx={{ textWrap: 'nowrap' }}
                        >
                          +7 (918) 058-46-79
                        </Typography>
                      </Link>
                      <Link
                        href="https://t.me/Engineer586898"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        aria-label="Telegram"
                      >
                        <TelegramIcon fontSize="small" />
                      </Link>
                      <Link
                        href="https://wa.me/79180584679"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        aria-label="WhatsApp"
                      >
                        <WhatsAppIcon fontSize="small" />
                      </Link>
                    </Box>
                  }
                />
              </ListItem>
            </Grid>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="Проживание"
                  secondary={
                    <>
                      <span className={'noWrap'}>Московская область, </span>{' '}
                      <span className={'noWrap'}>г.о. Красногорск</span>
                    </>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
          <Grid container size={12}>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="Email"
                  secondary={
                    <Link href="mailto:marvelsrp@yandex.ru" color="inherit">
                      marvelsrp@yandex.ru
                    </Link>
                  }
                />
              </ListItem>
            </Grid>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="Формат работы"
                  secondary="Полная занятость, Гибрид, Удаленно."
                />
              </ListItem>
            </Grid>
          </Grid>
          <Grid container size={12}>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="На позиции Frontend"
                  secondary="11 лет"
                />
              </ListItem>
            </Grid>
            <Grid size={6}>
              <ListItem sx={{ py: 0 }}>
                <ListItemText
                  primary="Гражданство"
                  secondary="Российская Федерация"
                />
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
