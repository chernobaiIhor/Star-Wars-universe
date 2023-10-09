import { Container, Button, CircularProgress, Stack, Divider, useMediaQuery } from '@mui/material';

import { DEFAULT_SEARCH_PARAMS } from 'src/constants/api';

import { Title } from 'src/components/title';
import { EmptyState } from 'src/components/empty-state';
import { CharactersTable } from 'src/components/characters-table';

import { useSearchCharacters } from 'src/hooks/characters/useSearchCharacters';

export const CharactersSearch = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const { characters = [], isLoading, count, handleFetchNextPage } = useSearchCharacters();

  return (
    <Container>
      <Stack alignItems="center" justifyContent="start" my="1rem" p="1rem" spacing={1}>
        {!characters.length && !isLoading ? (
          <EmptyState />
        ) : (
          <>
            <Title text="Characters List" color="primary" />
            <CharactersTable items={characters} isDesktop={isDesktop} />
            <Divider />
          </>
        )}
        {isLoading ? (
          <CircularProgress size={30} />
        ) : (
          count > DEFAULT_SEARCH_PARAMS.size && (
            <Button variant="contained" fullWidth={!isDesktop} onClick={handleFetchNextPage}>
              Show More
            </Button>
          )
        )}
      </Stack>
    </Container>
  );
};
