import { Paper } from '@mui/material';

import { Title } from 'src/components/title';
import { FilmsTable } from 'src/components/films-table';

import { FilmUi } from 'src/models/film';

interface Props {
  films: FilmUi[];
}

export const FilmsDetails = ({ films }: Props) => (
  <Paper
    variant="outlined"
    square
    sx={{
      padding: '1rem',
    }}
  >
    {!!films.length ? (
      <>
        <Title text="Films" />
        <FilmsTable films={films} />
      </>
    ) : (
      <Title text="No films found" />
    )}
  </Paper>
);
