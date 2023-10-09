import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toast';

import { ErrorBoundary } from 'src/pages/error-boundary';

import { theme } from 'src/providers/theme';

import { ReactQueryProvider } from 'src/providers';

import Router from './Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <ToastContainer position="bottom-center" delay={3000} />
    <CssBaseline />
    <ErrorBoundary>
      <ReactQueryProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ReactQueryProvider>
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
