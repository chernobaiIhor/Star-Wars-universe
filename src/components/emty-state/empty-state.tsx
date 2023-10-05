import { Box, Stack, Typography } from '@mui/material';

import { theme } from 'src/providers/theme';

interface Props {
  title?: string;
  message?: string;
}

export const EmptyState = ({ title, message }: Props) => (
  <Box
    sx={{
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 8,
      padding: '1rem',
      background: theme.palette.primary.light,
    }}
  >
    <Stack spacing={2}>
      <Typography variant="h5" color="primary.dark">
        {title || 'No character found with your search filters'}
      </Typography>
      <Typography variant="h5" color="primary.dark">
        {message || 'Please change/reset your filters and try again'}
      </Typography>
    </Stack>
  </Box>
);
