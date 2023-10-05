import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ERROR } from 'src/constants/errors';
import { ROUTES } from 'src/constants/routes';

interface Props {
  message?: string;
}

export const ErrorGrid = ({ message = ERROR.UNEXPECTED }: Props) => (
  <Container fixed>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h5" color="secondary" align="center">
          {message}
        </Typography>
        <Button component={Link} to={ROUTES.ROOT} variant="contained">
          Take me back to the homepage
        </Button>
      </Stack>
    </Box>
  </Container>
);
