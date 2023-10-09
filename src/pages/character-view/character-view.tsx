import { Container, Stack, CircularProgress, Divider } from '@mui/material';

import { EMPTY_STATE } from 'src/constants/errors';

import { CharacterDetails } from 'src/components/character-details';
import { FilmsDetails } from 'src/components/films-details';
import { EmptyState } from 'src/components/empty-state';

import { useSearchCharacter } from 'src/hooks/characters/useSearchCharacter';

export const CharacterView = () => {
  const { character = {}, films = [], isLoading, isError } = useSearchCharacter();

  return (
    <Container>
      <Stack my="2rem" alignItems="center" justifyContent="start">
        {!isLoading ? (
          !isError ? (
            <Stack spacing={2}>
              <CharacterDetails character={character} />
              <FilmsDetails films={films} />
            </Stack>
          ) : (
            <EmptyState title={EMPTY_STATE.CHARACTER_TITLE} message={EMPTY_STATE.CHARACTER_MESSAGE} />
          )
        ) : (
          <CircularProgress size={30} />
        )}
      </Stack>
    </Container>
  );
};
