import { Character } from 'src/models/character';

const NOT_AVAILABLE = 'N/A';

export const mapCharacter = (character?: Character): Record<string, string | undefined> => ({
  Name: character?.name || NOT_AVAILABLE,
  'Birth Year': character?.birth_year || NOT_AVAILABLE,
  'Eye Color': character?.eye_color || NOT_AVAILABLE,
  Films: !!character?.films ? character.films.join(', ') : NOT_AVAILABLE,
  Gender: character?.gender || NOT_AVAILABLE,
  'Hair Color': character?.hair_color || NOT_AVAILABLE,
  Height: character?.height || NOT_AVAILABLE,
  Homeworld: character?.homeworld || NOT_AVAILABLE,
  Mass: character?.mass || NOT_AVAILABLE,
  'Skin Color': character?.skin_color || NOT_AVAILABLE,
  Species: !!character?.species.length ? character.species.join(', ') : NOT_AVAILABLE,
  Starships: !!character?.starships.length ? character.starships.join(', ') : NOT_AVAILABLE,
  URL: character?.url || NOT_AVAILABLE,
  Vehicles: !!character?.vehicles.length ? character.vehicles.join(', ') : NOT_AVAILABLE,
});
