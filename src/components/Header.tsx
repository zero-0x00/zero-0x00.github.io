import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import JavascriptIcon from '@mui/icons-material/Javascript';
import avatarImage from '../assets/avatar.jpg';
import jsImage from '../assets/js.png';

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
            <ListItem>
              <ListItemAvatar>
                <Avatar color={'text.primary'}>
                  <ContactPhoneIcon color={'action'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Телефон" secondary="+7 (918) 0584679" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon color={'action'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary="marvelsrp@yandex.ru" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={jsImage}>
                  <JavascriptIcon fontSize={'large'} color={'action'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="На позиции Frontend" secondary="10 лет" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={6}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon color={'action'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Проживание"
                secondary="Московская область, г.о. Красногорск"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkHistoryIcon color={'action'} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Формат работы"
                secondary="Полная занятость, Гибрид, Удаленно."
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccountBalanceIcon color={'action'} />
                </Avatar>
              </ListItemAvatar>
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
