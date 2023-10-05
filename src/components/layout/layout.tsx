import { AppBar, Toolbar, Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes';

import logo from 'src/assets/logo.png';

export const Layout = () => (
  <>
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <img src={logo} width={30} height={30} alt="star wars" />
        <Button
          sx={{
            marginInline: 1,
          }}
          color="secondary"
          component={Link}
          to={ROUTES.ROOT}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
    <main>
      <Outlet />
    </main>
  </>
);
