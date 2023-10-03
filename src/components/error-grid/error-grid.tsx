import { Box, Link, Typography } from '@mui/material';

import { ERROR } from 'src/constants/errors';

interface Props {
  message?: string;
}

export const ErrorGrid = ({ message = ERROR.UNEXPECTED }: Props) => (
  <Box
    sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h1" style={{ color: 'white' }}>
      {message} Click <Link href="/">here</Link> to return home.
    </Typography>
  </Box>
);
