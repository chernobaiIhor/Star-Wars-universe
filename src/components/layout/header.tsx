import { AppBar, Box, Button, List, ListItem, Drawer, IconButton, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { ROUTES } from 'src/constants/routes';

import { theme } from 'src/providers/theme';

import logo from 'src/assets/logo.png';

const drawerWidth = 240;

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <img src={logo} width={30} height={30} alt="star wars" />
          <Button
            sx={{
              marginInline: 1,
              display: { xs: 'none', sm: 'block' },
            }}
            color="secondary"
            component={Link}
            to={ROUTES.ROOT}
          >
            Home
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={document.body}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: theme.palette.primary.dark,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <List>
            <ListItem>
              <Button color="secondary" component={Link} to={ROUTES.ROOT}>
                Home
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
