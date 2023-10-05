import { useParams } from 'react-router-dom';

import { useSearchCharacterByIdQuery } from 'src/hooks/api/useCharactersApi';

import { mapCharacter } from 'src/utils/mapCharacter';

export const useSearchCharacter = () => {
  const { id = null } = useParams<{ id: string }>();
  const { data, isLoading } = useSearchCharacterByIdQuery(id);

  return { character: mapCharacter(data), isLoading } as const;
};
