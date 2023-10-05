import { Container, Button, CircularProgress, Stack, Divider } from '@mui/material';

import { DEFAULT_SEARCH_PARAMS } from 'src/constants/api';

import { CharactersTable } from 'src/components/characters-table';

import { theme } from 'src/providers/theme';

import { useSearchCharacters } from 'src/hooks/characters/useSearchCharacters';

export const CharactersSearch = () => {
  const { characters = [], isLoading, count, handleFetchNextPage } = useSearchCharacters();

  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="start"
        m="2rem 0 3rem"
        p="1rem"
        spacing={1}
        sx={{
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: '0.5rem',
        }}
      >
        <CharactersTable items={characters} />
        <Divider />
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          count > DEFAULT_SEARCH_PARAMS.size && (
            <Button variant="contained" onClick={handleFetchNextPage}>
              Show More
            </Button>
          )
        )}
      </Stack>
    </Container>
  );
};
