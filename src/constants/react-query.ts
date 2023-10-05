import { QueryClientConfig } from 'react-query';

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;

export const defaultQueryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnMount: 'always',
      refetchOnWindowFocus: false,
      staleTime: ONE_MINUTE,
    },
  },
};

export const QUERY_KEYS = {
  CHARACTERS: 'characters',
  CHARACTER: 'character',
} as const;
