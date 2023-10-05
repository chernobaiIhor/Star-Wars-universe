import { Metadata } from 'src/models/metadata';

type Gender = 'male' | 'female';

export interface Character extends Metadata {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: Gender;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
