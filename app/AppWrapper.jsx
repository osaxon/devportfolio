'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@wits/next-themes';
import { useRef } from 'react';

export default function AppWrapper({ children }) {
  const queryClient = useRef(new QueryClient());
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient.current}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
