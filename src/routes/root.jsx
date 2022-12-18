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
  Link,
} from '@mui/material';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

import Box from '@mui/material/Box';
import Globalstyles from '@mui/material/GlobalStyles';

import { Link as RouterLink } from 'react-router-dom';

import Main from './main';

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
              px: 3,
              alignItems: 'center',
              borderTop: '1px solid #e9ecef',
            }}
          >
            <img src={viteLogo} alt="" width="30px" height="30px" />
            <Typography component="h1" variant="h6" sx={{ ml: 2 }}>
              vite@latest
            </Typography>
          </Box>
          <Search />
          <Divider />
          <Aside />
        </Stack>
      </Box>
      <Box sx={{ flex: '1 0 550px', height: 'inherit' }}>
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
      <ListItemButton component={RouterLink} to="contacts/1">
        <ListItemText primary="hello1" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="contacts/2">
        <ListItemText primary="hello2" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="contacts/3">
        <ListItemText primary="hello3" />
      </ListItemButton>
    </List>
  );
}

export default Root;
