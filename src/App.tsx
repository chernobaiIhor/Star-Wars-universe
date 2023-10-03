import { BrowserRouter } from 'react-router-dom';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import { ErrorBoundary } from 'src/pages/error-boundary';

import { ReactQueryProvider } from 'src/providers';

import Router from './Router';

const App = () => (
  <>
    <ScopedCssBaseline>
      <ErrorBoundary>
        <ReactQueryProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ReactQueryProvider>
      </ErrorBoundary>
    </ScopedCssBaseline>
  </>
);

export default App;
