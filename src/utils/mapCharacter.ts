import { Character, CharacterUi } from 'src/models/character';

export const mapCharacter = (character?: Character): CharacterUi => ({
  Name: character?.name || '-',
  Gender: character?.gender || '-',
  Height: character?.height || '-',
  'Birth Year': character?.birth_year || '-',
  'Eye Color': character?.eye_color || '-',
  'Skin Color': character?.skin_color || '-',
  'Hair Color': character?.hair_color || '-',
  Mass: character?.mass || '-',
});
