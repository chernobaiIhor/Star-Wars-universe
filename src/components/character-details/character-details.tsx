import { Paper, Grid, Typography } from '@mui/material';

import { Title } from 'src/components/title';

import { CharacterUi } from 'src/models/character';

const FILMS_KEY = 'Films';

interface Props {
  character: CharacterUi;
}

export const CharacterDetails = ({ character }: Props) => (
  <Paper
    variant="outlined"
    square
    sx={{
      padding: '1rem',
    }}
  >
    <Title text="Character Details" />
    <Grid container spacing={2} justifyContent="space-between">
      {Object.entries(character).map(([key, value]) => (
        <Grid key={value} item xs={key === FILMS_KEY ? 12 : 3}>
          <Typography variant="subtitle1" color="secondary">
            {key}:
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              wordBreak: 'break-word',
            }}
            color="secondary"
          >
            {value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Paper>
);
