import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import avatarImage from '../assets/avatar.jpg';

function Header() {
  return (
    <Grid container spacing={2}>
      <Grid size={5} container>
        <Grid
          size={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar src={avatarImage} sx={{ width: 128, height: 128 }} />
        </Grid>
        <Grid
          size={8}
          container
          direction={'column'}
          justifyContent={'center'}
          spacing={1}
        >
          <Typography variant={'h6'}>Резюме</Typography>
          <Typography variant={'h4'}>Максим Бугай</Typography>
          <Typography variant={'h5'}>Senior Frontend Developer</Typography>
        </Grid>
      </Grid>
      <Grid container size={7} spacing={2}>
        <Grid size={6}>
          <List>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Телефон"
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link href="tel:+79180584679" color="inherit">
                      +7 (918) 058-46-79
                    </Link>
                    <Link
                      href="https://t.me/LazyEngineer_0"
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
            <ListItem sx={{ py: 0 }}>
              <ListItemText primary="На позиции Frontend" secondary="11 лет" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={6}>
          <List>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Проживание"
                secondary="Московская область, г.о. Красногорск"
              />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Формат работы"
                secondary="Полная занятость, Гибрид, Удаленно."
              />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
              <ListItemText
                primary="Гражданство"
                secondary="Российская федерация"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
