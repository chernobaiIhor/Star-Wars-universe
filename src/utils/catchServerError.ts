import { toast } from 'react-toast';

import { ERROR } from 'src/constants/errors';

export type ErrorResponse = {
  code?: string;
  message?: string;
};

export const catchServerErrors = (error: ErrorResponse) =>
  toast.error(error?.message || error?.code || ERROR.UNEXPECTED);
