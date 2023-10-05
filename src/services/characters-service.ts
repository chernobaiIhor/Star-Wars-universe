import { stringifyUrl } from 'query-string';
import { AxiosResponse } from 'axios';

import http from 'src/services/base-http-service';

import { SearchRequest, SearchResponse } from 'src/models/base';
import { Character } from 'src/models/character';

export class CharactersService {
  async searchCharacters({ page, size, keyword }: SearchRequest): Promise<SearchResponse<Character>> {
    const url = stringifyUrl({
      url: `/people/?search=`,
      query: {
        page,
        size,
        k: keyword,
      },
    });

    return http.get(url);
  }

  async searchById(id: string | null): Promise<AxiosResponse<Character>> {
    return http.get(`/people/${id}`);
  }
}
