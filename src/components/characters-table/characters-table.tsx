import { Paper, Table, TableBody, Link, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes';

import { replaceDigit } from 'src/utils/replaceDigit';

import { Character } from 'src/models/character';

interface Props {
  items: Character[];
  isDesktop: boolean;
}

export const CharactersTable = ({ items, isDesktop }: Props) => {
  const getCharacterLink = (url: string) => ROUTES.CHARACTERS_VIEW.replace(':id', replaceDigit(url));

  return (
    <TableContainer component={Paper}>
      <Table className={isDesktop ? '' : 'mobile'}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">{isDesktop ? 'Birth Year' : 'Year'}</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">{isDesktop ? 'Films Count' : 'Films'}</TableCell>
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
