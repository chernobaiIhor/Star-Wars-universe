import { Film, FilmUi } from 'src/models/film';

const getFilmAge = (release_date: string): number => new Date().getFullYear() - new Date(release_date).getFullYear();

export const mapFilms = (films: Film[]): FilmUi[] => {
  if (!films?.length) return [];

  return films.map(({ title, release_date }) => ({
    title,
    years: getFilmAge(release_date),
  }));
};
