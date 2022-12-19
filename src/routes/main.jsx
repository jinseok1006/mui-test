import react from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { Typography, AppBar, Toolbar, IconButton, Box } from '@mui/material';

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
      <Box my={3}>
        <Outlet />
      </Box>
    </>
  );
}

export default Main;
