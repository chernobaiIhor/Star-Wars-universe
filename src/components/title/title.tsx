import { Stack, Typography } from '@mui/material';

import { theme } from 'src/providers/theme';

interface Props {
  text: string;
  color?: keyof typeof theme.palette;
}

export const Title = ({ text, color = 'secondary' }: Props) => (
  <Stack justifyContent="start" width="100%" mb="1rem">
    <Typography variant="h5" color={color}>
      {text}
    </Typography>
  </Stack>
);
