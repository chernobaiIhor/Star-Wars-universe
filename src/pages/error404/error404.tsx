import { ERROR } from 'src/constants/errors';

import { ErrorGrid } from 'src/components/error-grid';

export const Error404 = () => <ErrorGrid message={ERROR.NOT_FOUND} />;
