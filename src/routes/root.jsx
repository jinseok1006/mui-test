import {
  CssBaseline,
  Stack,
  Container,
  Typography,
  ListItemText,
  List,
  ListItemButton,
  Divider,
  ListItem,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';

import logo from '../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Globalstyles from '@mui/material/GlobalStyles';

import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <CssBaseline />
      <Globalstyles
        styles={{
          html: { height: '100%' },
          body: { height: 'inherit' },
          '#root': { height: 'inherit' },
        }}
      />

      <MyLayout />
    </>
  );
}

function MyLayout() {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', height: 'inherit' }}>
      <Box
        sx={{
          flex: '0 0 330px',
          height: 'inherit',
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #e9ecef',
        }}
      >
        <Stack sx={{ height: 'inherit' }}>
          <Box
            sx={{
              flex: '0 0 60px',
              order: '1',
              display: 'flex',
              justifyContent: 'flex-start',
              pl: 3,
              alignItems: 'center',
              borderTop: '1px solid #e9ecef',
            }}
          >
            <img src={logo} alt="" />
            <Typography component="h1" variant="h6" sx={{ ml: 1 }}>
              React Router Contacts
            </Typography>
          </Box>
          <Search />
          <Divider />
          <Aside />
        </Stack>
      </Box>
      <Box sx={{ flex: '1', height: 'inherit' }}>
        <Main />
      </Box>
    </Box>
  );
}
function Search() {
  return (
    <Box
      sx={{ display: 'flex', my: 2, mx: 3, justifyContent: 'center' }}
      component="form"
    >
      <TextField size="small" label="Search" fullWidth />
      <Button variant="contained" sx={{ ml: 2 }} type="submit">
        new
      </Button>
    </Box>
  );
}

function Aside() {
  return (
    <List sx={{ flex: '1' }}>
      <ListItemButton>
        <ListItemText primary="hello" />
      </ListItemButton>
    </List>
  );
}

function Main() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flex: '1' }}>
            Main Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Root;
