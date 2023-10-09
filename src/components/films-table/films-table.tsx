import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { FilmUi } from 'src/models/film';

interface Props {
  films: FilmUi[];
}

export const FilmsTable = ({ films }: Props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell size="small">#</TableCell>
        <TableCell size="small">Title</TableCell>
        <TableCell size="small" align="right">
          Released
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {films.map(({ title, years }, index) => (
        <TableRow key={title}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell align="right">{years} years</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
