import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes';

import { Error404 } from 'src/pages/error404';
import { Error } from 'src/pages/error';
import { CharactersSearch } from 'src/pages/characters-search';
import { CharacterView } from 'src/pages/character-view';

import { Layout } from 'src/components/layout';

const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={ROUTES.CHARACTERS_LIST} element={<CharactersSearch />} />
      <Route path={ROUTES.CHARACTERS_VIEW} element={<CharacterView />} />
    </Route>
    <Route path={ROUTES.ERROR} element={<Error />} />
    <Route path={ROUTES.NOT_FOUND} element={<Error404 />} />
    <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.CHARACTERS_LIST} />} />
    <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
  </Routes>
);

export default Router;
