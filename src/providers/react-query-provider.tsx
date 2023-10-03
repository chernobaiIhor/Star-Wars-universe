import { useState, ReactNode } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { defaultQueryClientOptions } from 'src/constants/react-query';

interface Props {
  children: ReactNode;
  config?: QueryClientConfig;
}

export const ReactQueryProvider = ({ children, config = defaultQueryClientOptions }: Props) => {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};
