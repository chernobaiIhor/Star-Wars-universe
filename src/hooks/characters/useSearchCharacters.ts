import { useMemo } from 'react';

import { DEFAULT_SEARCH_PARAMS } from 'src/constants/api';

import { useInfiniteSearchTheatersQuery } from 'src/hooks/api/useCharactersApi';

export const useSearchCharacters = () => {
  const { data, isFetching, fetchNextPage } = useInfiniteSearchTheatersQuery(DEFAULT_SEARCH_PARAMS);
  const fetchedCharacters = useMemo(() => data?.pages?.flatMap(({ results }) => results).filter(Boolean), [data]);
  const count = data?.pages[0]?.count || 0;

  const handleFetchNextPage = async () => {
    await fetchNextPage();
  };

  return {
    characters: fetchedCharacters,
    count,
    handleFetchNextPage,
    isLoading: isFetching,
  } as const;
};
