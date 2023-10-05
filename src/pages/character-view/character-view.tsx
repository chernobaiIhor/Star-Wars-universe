import { Container, Paper, Stack, Box, Typography, CircularProgress, List, ListItem } from '@mui/material';

import { useSearchCharacter } from 'src/hooks/characters/useSearchCharacter';

export const CharacterView = () => {
  const { character = {}, isLoading } = useSearchCharacter();

  return (
    <Container>
      <Stack m="2rem 0 3rem" alignItems="center" justifyContent="start">
        {!isLoading ? (
          <Paper variant="outlined" square>
            <List>
              {Object.entries(character).map(([key, value], index) => (
                <ListItem key={index} alignItems="center" divider={Object.entries(character).length !== index + 1}>
                  <Typography variant="subtitle1" color="secondary">
                    {key}:
                  </Typography>
                  <Box ml={1}>
                    <Typography variant="subtitle2" color="secondary">
                      {value}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <CircularProgress size={20} />
        )}
      </Stack>
    </Container>
  );
};
