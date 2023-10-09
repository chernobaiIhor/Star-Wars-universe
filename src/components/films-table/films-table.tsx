import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { FilmUi } from 'src/models/film';

interface Props {
  films: FilmUi[];
}

export const FilmsTable = ({ films }: Props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>Title</TableCell>
        <TableCell align="right">Released Years</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {films.map(({ title, years }, index) => (
        <TableRow key={title}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell align="right">{years}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
