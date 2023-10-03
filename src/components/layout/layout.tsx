import { AppBar } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './layout.styled';

export const Layout = () => (
  <LayoutContainer>
    <AppBar position="static" />
    <main>
      <Outlet />
    </main>
  </LayoutContainer>
);
