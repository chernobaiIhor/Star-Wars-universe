import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

import { useSearchCharacterByIdQuery } from 'src/hooks/api/useCharactersApi';
import { useSearchFilmQuery } from 'src/hooks/api/useFilmsApi';

import { mapCharacter } from 'src/utils/mapCharacter';
import { mapFilms } from 'src/utils/mapFilms';

export const useSearchCharacter = () => {
  const { id = null } = useParams<{ id: string }>();
  const { data, isLoading: isLoadingCharacter, isError: isErrorCharacter } = useSearchCharacterByIdQuery(id);
  const {
    data: filmsData = [],
    isLoading: isLoadingFilms,
    isError: isErrorFilms,
  } = useSearchFilmQuery(data?.films || []);
  const { character, films } = useMemo(
    () => ({
      character: mapCharacter(data),
      films: mapFilms(filmsData),
    }),
    [data, filmsData],
  );

  return {
    character,
    films,
    isLoading: isLoadingCharacter || isLoadingFilms,
    isError: isErrorCharacter || isErrorFilms,
  } as const;
};
