import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { QUERY_KEYS } from 'src/constants/react-query';

import { FilmsService } from 'src/services/films-service';

import { replaceDigit } from 'src/utils/replaceDigit';
import { catchServerErrors, ErrorResponse } from 'src/utils/catchServerError';

import { Film } from 'src/models/film';

const filmsService = new FilmsService();

export const useSearchFilmQuery = (films: string[]) => {
  return useQuery(
    [QUERY_KEYS.FIlM, films],
    async () => {
      const promises = films.map((film) => filmsService.searchFilm(replaceDigit(film)));

      const result = await Promise.allSettled(promises);
      const response = result.filter((res) => res.status === 'fulfilled') as unknown as PromiseFulfilledResult<
        AxiosResponse<Film>
      >[];

      return response.map(({ value }) => value.data);
    },
    {
      onError: (error: ErrorResponse) => catchServerErrors(error),
    },
  );
};
