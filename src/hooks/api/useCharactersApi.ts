import { useInfiniteQuery, useQuery } from 'react-query';

import { QUERY_KEYS } from 'src/constants/react-query';
import { DEFAULT_SEARCH_PARAMS } from 'src/constants/api';

import { CharactersService } from 'src/services/characters-service';

import { SearchRequest } from 'src/models/base';

const charactersService = new CharactersService();

export const useInfiniteSearchTheatersQuery = (filters: SearchRequest) => {
  return useInfiniteQuery(
    [QUERY_KEYS.CHARACTERS, filters],
    async ({ pageParam = 1 }) => {
      const { data } = await charactersService.searchCharacters({
        ...filters,
        page: (pageParam as number) || DEFAULT_SEARCH_PARAMS.page,
      });

      return data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.results?.length < (filters?.size || DEFAULT_SEARCH_PARAMS.size)) return undefined;

        return allPages?.length + 1;
      },
      onError: (error: string) => console.warn(error || 'An error occurred while searching characters'),
    },
  );
};

export const useSearchCharacterByIdQuery = (id: string | null) => {
  return useQuery(
    [QUERY_KEYS.CHARACTER, id],
    async () => {
      const { data } = await charactersService.searchById(id);

      return data;
    },
    {
      enabled: !!id,
      onError: (error: string) => console.warn(error || 'An error occurred while searching characters'),
    },
  );
};
