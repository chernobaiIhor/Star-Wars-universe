import { BaseCharacter, Character } from './character';
import { Metadata } from './metadata';

export interface Film extends BaseCharacter, Metadata {
  characters: Character[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  title: string;
}

export interface FilmUi {
  title: string;
  years: number;
}
