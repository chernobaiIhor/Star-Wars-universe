import { Paper, Table, TableBody, Link, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes';

import { Character } from 'src/models/character';

interface Props {
  items: Character[];
}

export const CharactersTable = ({ items }: Props) => {
  const getCharacterLink = (url: string) => ROUTES.CHARACTERS_VIEW.replace(':id', url.replace(/[^0-9]/g, ''));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Birth Year</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Films Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ url, name, birth_year, gender, films = [] }) => (
            <TableRow key={url}>
              <TableCell>
                <Link color="secondary" component={RouterLink} to={getCharacterLink(url)}>
                  {name}
                </Link>
              </TableCell>
              <TableCell align="right">{birth_year}</TableCell>
              <TableCell align="right">{gender}</TableCell>
              <TableCell align="right">{films.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
