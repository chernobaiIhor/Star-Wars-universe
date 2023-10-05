import axios from 'axios';

import { API_BASE_URL } from 'src/constants/api';

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
