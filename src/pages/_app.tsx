import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useRef } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ParallaxProvider } from 'react-scroll-parallax';

import '@/styles/globals.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import Seo from '@/components/Seo';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ParallaxProvider>
          <ThemeProvider>
            <GoogleAnalytics
              measurementId={process.env.NEXT_PUBLIC_MEASUREMENT_ID}
            />
            <Seo />
            <Component {...pageProps} />
          </ThemeProvider>
        </ParallaxProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
