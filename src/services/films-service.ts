import { AxiosResponse } from 'axios';

import http from 'src/services/base-http-service';

import { Film } from 'src/models/film';

export class FilmsService {
  async searchFilm(id: string | null): Promise<AxiosResponse<Film>> {
    return http.get(`/films/${id}`);
  }
}
