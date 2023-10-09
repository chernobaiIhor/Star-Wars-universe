import { Metadata } from './metadata';

export interface BaseCharacter {
  vehicles: string[];
  starships: string[];
  species: string[];
  url: string;
}

export interface Character extends BaseCharacter, Metadata {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
}

export type CharacterUi = Record<string, string>;
