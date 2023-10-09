export const ERROR = {
  BOUNDARY: 'Sorry.. there was an error.',
  UNEXPECTED: 'An unexpected error occurred.',
  NOT_FOUND: 'Hey captain! We could not find the page you were looking for.',
  SERVER_ERROR: 'An error occurred while searching a character',
} as const;

export const EMPTY_STATE = {
  CHARACTER_TITLE: 'No character found',
  CHARACTER_MESSAGE: 'Try to search for another character',
} as const;
